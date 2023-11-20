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
import ProjectJoinList from 'pages/ProjectJoinList';
import Board from 'pages/Board';
import BoardDetail from 'pages/BoardDetail';
import CreateBoard from 'pages/CreateBoard';
import { ReactQueryDevtools } from 'react-query/devtools';
import BoardEdit from 'pages/BoardEdit';
import SearchUser from 'pages/SearchUser';

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
          <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
          <Modal />
          <BrowserRouter>
            <Routes>
              <Route path='/others/:id' element={<OthersPage />} />
              <Route path='/mypage' element={<MyPage />} />
              <Route path='/login/oauth2/code/google' element={<LoginPage />} />
              <Route path='/detail/:id' element={<Detail />} />
              <Route path='/explore' element={<Explore />} />
              <Route path='/' element={<Main />} />
              <Route path='/notify' element={<Notify />} />
              <Route path='/myjjong' element={<MyJJong />} />
              <Route
                path='/seeMyProjectJoing/:id'
                element={<ProjectJoinList />}
              />
              <Route path='/board' element={<Board />} />
              <Route path='*' element={<Navigate replace to='/' />} />
              <Route path='/boards/:id' element={<BoardDetail />} />
              <Route path='/createBoard' element={<CreateBoard />} />
              <Route path='/board/edit/:id' element={<BoardEdit />} />
              <Route path='/search-user' element={<SearchUser />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
};

export default App;
