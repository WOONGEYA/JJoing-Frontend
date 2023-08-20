import axios, { AxiosError, AxiosInstance } from 'axios';
import { API_URL } from 'constants/config';

const instance: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.request.use(
  (response) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      response.headers.set('token', accessToken);
    }
    return response;
  },

  (error: AxiosError) => {
    return error;
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    if (error) {
      return error;
    }
  },
);

export default instance;
