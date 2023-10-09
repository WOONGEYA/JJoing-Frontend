import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import instance from 'apis/httpClient';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from 'react-query';

const LoginPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const encodedCode = searchParams.get('code') ?? '';

  const encodedValue = encodeURIComponent(encodedCode);

  const postCode = async (encodedValue: string) => {
    return (await instance.post(`/login/google?code=${encodedValue}`)).data;
  };

  // useEffect(() => {
  //   const fetchAndNavigate = async () => {
  //     try {
  //       const data = await postCode(encodedValue);
  //       const { accessToken, refreshToken } = data;
  //       navigate('/');

  //       localStorage.setItem('accessToken', accessToken);
  //       localStorage.setItem('refreshToken', refreshToken);
  //     } catch (error) {
  //       console.error(error);
  //       navigate('/');
  //       toast.error('학교 계정으로 로그인하세요.');
  //     }
  //   };

  //   fetchAndNavigate();
  // }, [encodedValue]);

  const { mutate } = useMutation(() => postCode(encodedValue), {
    onSuccess: (data) => {
      console.log(data);
      const { accessToken, refreshToken } = data;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      navigate('/');
    },
    onError: () => {
      toast.error('학교계정으로 로그인해주세요');
      navigate('/');
    },
  });

  useEffect(() => {
    if (encodedValue) {
      mutate();
    }
  }, [encodedValue]);

  return <ToastContainer position='bottom-left' />;
};

export default LoginPage;
