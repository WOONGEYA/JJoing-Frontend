import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from 'components/Footer';
import Header from 'components/Header';
import MyPage from 'pages/myPage';
import LoginPage from 'pages/LoginPage';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header />
                <MyPage />
                <Footer />
              </>
            }
          />
          <Route path='/login/oauth2/code/google' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
