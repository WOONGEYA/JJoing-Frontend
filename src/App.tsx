import Detail from 'pages/Detail';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/detail' element={<Detail />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
