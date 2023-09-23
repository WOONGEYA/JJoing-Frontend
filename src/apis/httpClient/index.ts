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

  (error) => {
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
      try {
        const { accessToken } = await getUpdatedAccessToken();
        setUpdatedAccessToken(accessToken);
      } catch (error) {
        console.log(error);
      }
    };

    if (status === 403) {
      handleAccessTokenRequest();
    }

    return error;
  },
);

export default instance;
