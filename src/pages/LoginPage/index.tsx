import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import instance from 'apis/httpClient';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { styled } from 'styled-components';

const LoginPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const encodedCode = searchParams.get('code') ?? '';

  const encodedValue = encodeURIComponent(encodedCode);

  const postCode = async (encodedValue: string) => {
    try {
      const response = await instance.post(
        `/login/google?code=${encodedValue}`,
      );
      return response.data;
    } catch (error) {
      console.error('');
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
        toast.error('학교 계정으로 로그인하세요.');
      }
    };

    fetchAndNavigate();
  }, [encodedValue]);

  return (
    <>
      <ToastContainer position='bottom-left' />
    </>
  );
};

export default LoginPage;
