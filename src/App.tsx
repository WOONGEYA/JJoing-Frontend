import Detail from 'pages/Detail';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
        <Route path='/detail' element={<Detail />}/>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
