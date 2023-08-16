import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LoginPage from 'pages/LoginPage';
import Detail from 'pages/Detail';
import Modal from 'components/Modal';
import MyPage from 'pages/MyPage';
import Explore from 'pages/Explore';
import Main from 'pages/Main';
import Notify from 'pages/Notify';
import MyJJong from 'pages/MyJJong';

const queryClient = new QueryClient();

const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Modal />
        <BrowserRouter>
          <Routes>
            <Route path='/mypage' element={<MyPage />} />
            <Route path='/login/oauth2/code/google' element={<LoginPage />} />
            <Route path='/detail' element={<Detail />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/' element={<Main />} />
            <Route path='/notify' element={<Notify />} />
            <Route path='/myjjong' element={<MyJJong />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
