import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL;

const LoginPage = () => {
  useEffect(() => {
    postCode;
  }, []);

  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const encodedCode = searchParams.get('code') ?? '';

  const encodedValue = encodeURIComponent(encodedCode);

  const instance = axios.create({
    baseURL: API_URL,
  });

  const postCode = async (encodedValue: string) => {
    return (await instance.post(`/login/google?code=${encodedValue}`)).data;
  };

  useQuery('auth', () => postCode(encodedValue), {
    onSuccess: (data) => {
      const { accessToken, refreshToken } = data;
      navigate('/');

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return <></>;
};

export default LoginPage;
