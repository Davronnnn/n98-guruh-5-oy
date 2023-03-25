import './app.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
	const { isLogin } = useContext(AuthContext);

	return (
		<BrowserRouter>
			<Routes>
				{isLogin ? (
					<>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/login' element={<Login />} />
						<Route path='/product/:id' element={<Product />} />

						<Route path='*' element={<NotFound />} />
					</>
				) : (
					<>
						<Route path='/' element={<Login />} />
						<Route path='*' element={<NotFound />} />
					</>
				)}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
