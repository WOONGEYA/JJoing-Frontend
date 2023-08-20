import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL;

const LoginPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const encodedCode = searchParams.get('code') ?? '';

  const encodedValue = encodeURIComponent(encodedCode);

  const instance = axios.create({
    baseURL: API_URL,
  });

  const postCode = async (encodedValue: string) => {
    try {
      const response = await instance.post(
        `/login/google?code=${encodedValue}`,
      );
      return response.data;
    } catch (error) {
      console.error('error error error');
      throw error;
    }
  };

  useEffect(() => {
    const fetchAndNavigate = async () => {
      try {
        const data = await postCode(encodedValue);
        const { accessToken, refreshToken } = data;

        navigate('/');

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
      } catch (error) {
        console.error(error);
        navigate('/');
      }
    };

    fetchAndNavigate();
  }, [encodedValue]);

  return <></>;
};

export default LoginPage;
