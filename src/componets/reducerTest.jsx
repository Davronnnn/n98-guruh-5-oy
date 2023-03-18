import React, { useReducer, useState } from 'react';
import counterReducer from '../reducers/counterReducer';

const ReducerTest = () => {
	const [data, dispatch] = useReducer(counterReducer, 0);
	const [input, setInput] = useState('');

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
		<>
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
		</>
	);
};

export default ReducerTest;
