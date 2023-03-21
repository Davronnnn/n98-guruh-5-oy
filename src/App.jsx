import { useContext, useEffect, useState } from 'react';

import './app.scss';

import Header from './componets/Header';
import { AuthContext } from './context/AuthContext';
import ContactBook from './componets/ContactBook';
import Footer from './componets/Footer';

function App() {
	const [todos, setTodos] = useState([]);

	const { isLogin } = useContext(AuthContext);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((res) => res.json())
			.then((data) => {
				setTodos(data);
			});
	}, []);

	return (
		<div className='w-full'>
			<Header />
			<Footer />
			<div className='w-full p-5'>
				{isLogin ? (
					<h1 className='bg-green-500 text-white'>
						Ro'yxatdan o'tgansiz xush kelibsiz
					</h1>
				) : (
					<h1 className='bg-red-500'>Ro'yxatdan o'tmagansiz xayr</h1>
				)}

				<ContactBook />

				{todos.map((todo, i) => (
					<div className='font-extrabold mt-2' key={i}>
						{todo.title}
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
