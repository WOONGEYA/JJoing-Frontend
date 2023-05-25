import React from 'react';
import './styles/globalStyle.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/explore' element={<Explore />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;