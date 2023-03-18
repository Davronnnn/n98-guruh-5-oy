import { useEffect, useState } from 'react';
import './app.scss';

function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((res) => res.json())
			.then((data) => {
				setTodos(data);
			});
	}, []);

	return (
		<div className=''>
			<h2 className='flex m-5 text-[blue]  p-[30px] w-[200px] '>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Officiis, minus aliquam perferendis placeat explicabo magni,
				eaque sed animi amet debitis adipisci culpa, assumenda illo
				ullam commodi iure natus aut ex!
			</h2>

			<div className='my-3  bg-slate-600 flex justify-around flex-col  sm:flex-row '>
				<div>1</div>
				<div>1</div>
				<div>1</div>
			</div>

			{todos.map((todo, i) => (
				<div className='font-extrabold mt-2' key={i}>
					{todo.title}
				</div>
			))}
		</div>
	);
}

export default App;
