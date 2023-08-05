import Notifi from 'pages/Notifi';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
        <Route path='/notifi' element={<Notifi />}/>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
