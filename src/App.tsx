import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LoginPage from 'pages/LoginPage';
import Detail from 'pages/Detail';
import Modal from 'components/Modal';
import OthersPage from 'pages/OthersPage';
import MyPage from 'pages/MyPage';
import Explore from 'pages/Explore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Main from 'pages/Main';
import Notify from 'pages/Notify';
import MyJJong from 'pages/MyJJong';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

const App = () => {
  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Modal />
          <BrowserRouter>
            <Routes>
              <Route path='/other' element={<OthersPage />} />
              <Route path='/mypage' element={<MyPage />} />
              <Route path='/login/oauth2/code/google' element={<LoginPage />} />
              <Route path='/detail/:id' element={<Detail />} />
              <Route path='/explore' element={<Explore />} />
              <Route path='/' element={<Main />} />
              <Route path='/notify' element={<Notify />} />
              <Route path='/myjjong' element={<MyJJong />} />
              <Route path='*' element={<Navigate replace to='/' />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
};

export default App;
