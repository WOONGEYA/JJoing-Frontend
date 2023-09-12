import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import instance from 'apis/httpClient';

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
      }
    };

    const refreshToken = async () => {
      if (!localStorage.getItem('accessToken')) {
        try {
          const { data } = await instance.put('/login', {
            refreshToken: localStorage.getItem('refreshToken'),
          });

          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('refreshToken', data.refreshToken);
          console.log('이게 되노');
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchAndNavigate();
    refreshToken();
  }, [encodedValue]);

  return <></>;
};

export default LoginPage;
