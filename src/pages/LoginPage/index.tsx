import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const encodedCode = searchParams.get('code') ?? '';

  const encodedValue = encodeURIComponent(encodedCode);

  console.log(encodedValue);

  const instance = axios.create({
    baseURL: 'http://192.168.10.142:8080',
  });

  const postCode = async (encodedValue: string) => {
    return (await instance.get(`/login/oauth2/code/google?code=${encodedValue}`)).data;
  };

  useQuery('auth', () => postCode(encodedValue), {
    onSuccess: (data) => {
      console.log(data);
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
