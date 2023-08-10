import Notify from 'pages/Notify';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/notify' element={<Notify />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
