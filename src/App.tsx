import Detail from 'pages/Detail';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/detail' element={<Detail />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
