import axios, { AxiosInstance } from 'axios';
import { API_URL } from 'constants/config';

const instance: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },

  (error) => {
    return error;
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    if (error === undefined) return;

    const originalRequest = error.config;
    const { status } = error.response;

    const getUpdatedAccessToken = async () => {
      const refreshToken = localStorage.getItem('refreshToken');
      const { data } = await axios.put(`${API_URL}/login`, null, {
        headers: {
          'Refresh-Token': refreshToken,
        },
      });

      return data;
    };

    const setUpdatedAccessToken = (accessToken: string) => {
      localStorage.setItem('accessToken', accessToken);
    };

    const handleAccessTokenRequest = async () => {
      const { accessToken } = await getUpdatedAccessToken();
      setUpdatedAccessToken(accessToken);
      return accessToken;
    };

    if (status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newToken = await handleAccessTokenRequest();
      originalRequest.headers.Authorization = newToken;
      return instance(originalRequest);
    }

    return error;
  },
);

export default instance;
