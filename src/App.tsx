import Footer from 'components/Footer';
import Header from 'components/Header';
import LoginPage from 'pages/LoginPage';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={
            <>
              <Header />
              <Footer />
            </>
          } />
          <Route
            path="/login/oauth2/code/google"
            element={<LoginPage />}
          /> */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
	);
};

export default App;
