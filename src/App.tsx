import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyPage from 'pages/MyPage';
import LoginPage from 'pages/LoginPage';
import Detail from 'pages/Detail';

const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MyPage />} />
          <Route path='/login/oauth2/code/google' element={<LoginPage />} />
          <Route path='/detail' element={<Detail />}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
