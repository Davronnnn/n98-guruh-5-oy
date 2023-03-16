import { useReducer, useState } from 'react';
import './app.scss';
import ContactBook from './componets/ContactBook';
import User from './componets/User';

const reducer = (state, action) => {
	// if (action.type === 'increase') {
	// 	return state + 1;
	// } else if (action.type === 'decrease') {
	// 	return state - 1;
	// } else if (action.type === 'update') {
	// 	return action.payload;
	// } else {
	// 	return state
	// }

	switch (action.type) {
		case 'increase':
			return state + 1;
		case 'decrease':
			return state - 1;
		case 'update':
			return action.payload;
		default:
			return state;
	}
};

function App() {
	const [data, dispatch] = useReducer(reducer, 0);
	const [input, setInput] = useState('');

	const [todos, setTodos] = useState([]);

	// fetch('https://jsonplaceholder.typicode.com/todos')
	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		console.log(data);

	// 		// setTodos(data);
	// 	});

	const increaseHandler = () => {
		dispatch({ type: 'increase' });
	};
	const decreaseHandler = () => {
		dispatch({ type: 'decrease' });
	};

	const updateHandler = () => {
		dispatch({ type: 'update', payload: +input });
	};

	return (
		<div className='container p-5'>
			{todos.map((todo, i) => (
				<div key={i}>{todo.title}</div>
			))}
			<input
				type='text'
				value={input}
				onChange={(evt) => {
					setInput(evt.target.value);
				}}
				name=''
				id=''
			/>
			<button onClick={updateHandler}>Almashtirish</button>
			<button className='mx-3' onClick={decreaseHandler}>
				-
			</button>
			{data}
			<button className='mx-3' onClick={increaseHandler}>
				+
			</button>

			{/* <ContactBook /> */}

			{/* <User name="John" /> */}
		</div>
	);
}

export default App;
