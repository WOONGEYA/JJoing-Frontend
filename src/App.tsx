import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import Detail from 'pages/Detail';
import Modal from 'components/Modal';
import MyPage from 'pages/MyPage';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient();

const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Modal />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MyPage />} />
            <Route path='/login/oauth2/code/google' element={<LoginPage />} />
            <Route path='/detail' element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
