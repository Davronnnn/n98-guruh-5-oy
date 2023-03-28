import React, {
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useReducer,
	useState,
} from 'react';
import Layout from '../Layout/Layout';

import Loader from '../componets/Loader';
import Card from '../componets/Card';
import useFetch from '../hooks/useFetch';
import axios from 'axios';
import { getProducts, updateProducts } from '../services/products';
import { ThemeContext } from '../context/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT, UPDATE, ADD } from '../store';

const BASE_URL = 'https://63d3e856a93a149755b5c8f1.mockapi.io/';
const Home = () => {
	const counter = useSelector((prev) => prev.counter);

	const favorites = useSelector((prev) => prev.favorites);

	const dispatch = useDispatch();

	const [input, setInput] = useState('');
	const [loading, setLoading] = useState(true);

	const [tweets, setTweets] = useState([]);

	useEffect(() => {
		fetch(BASE_URL + 'categories')
			.then((res) => res.json())
			.then((data) => {
				setTweets(data);
				setLoading(false);
			});

		// getProducts().then((res) => {
		// 	console.log(res);
		// });
		// const data = {};
		// updateProducts(data).then((res) => {
		// 	console.log(res);
		// });
	}, []);

	const incrementHandler = () => {
		dispatch({
			type: INCREMENT,
		});
	};
	const decrementHandler = () => {
		dispatch({
			type: DECREMENT,
		});
	};
	const updateHandler = () => {
		dispatch({
			type: UPDATE,
			payload: input,
		});
	};

	console.log(favorites);
	const addFavoriteHandler = (tweet) => {
		dispatch({
			type: ADD,
			payload: tweet,
		});
	};

	return (
		<Layout>
			{favorites.map((tweet) => (
				<div key={tweet.id}>{tweet.name}</div>
			))}
			<input
				className='border-red-500 border'
				value={input}
				onChange={(evt) => {
					setInput(evt.target.value);
				}}
				type='text'
				name=''
				id=''
			/>
			<button onClick={updateHandler}>update</button>
			<button onClick={incrementHandler} className='m-5'>
				Increment
			</button>
			{counter}
			<button onClick={decrementHandler} className='m-5'>
				Decrement
			</button>
			{/* <div className='flex justify-around'>
				{categories.map((category) => (
					<div key={category.id}>{category.name}</div>
				))}
			</div> */}
			{loading ? (
				<Loader />
			) : (
				<div className='grid grid-cols-3  gap-3  px-5 py-5'>
					{tweets.map((tweet, i) => (
						<div
							key={i}
							className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
							<div className='flex card flex-col items-center pb-10'>
								<img
									className='w-24 h-24 mb-3 rounded-full shadow-lg'
									src={tweet.avatar}
									alt='Bonnie'
								/>
								<h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
									{tweet.name}
								</h5>
								<span className='text-sm text-gray-500 dark:text-gray-400'>
									{tweet.userName}
								</span>

								<p onClick={(evt) => addFavoriteHandler(tweet)}>
									{tweet.favorite ? '🤣' : '😐'}
								</p>
								<p className='text-white'>{tweet.body}</p>
							</div>
						</div>
					))}
				</div>
			)}
			{/* {products.map((product) => (
						<Card key={product.id} product={product} />
					))} */}
		</Layout>
	);
};

export default Home;
