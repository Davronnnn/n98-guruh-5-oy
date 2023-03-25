import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';

import Loader from '../componets/Loader';
import Card from '../componets/Card';
import useFetch from '../hooks/useFetch';
import axios from 'axios';
import { getProducts, updateProducts } from '../services/products';

const BASE_URL = 'https://63d3e856a93a149755b5c8f1.mockapi.io/';
const Home = () => {
	const [products, isLoading] = useFetch(BASE_URL + 'products');
	const [categories, isLoading2] = useFetch(BASE_URL + 'categories');

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getProducts().then((res) => {
			console.log(res);
		});
		const data = {
			
		}
		updateProducts(data).then((res) => {
			console.log(res)
		});
	}, []);

	return (
		<Layout>
			{posts.map((post) => (
				<div key={post.id}>{post.title}</div>
			))}
			<div className='flex justify-around'>
				{categories.map((category) => (
					<div key={category.id}>{category.name}</div>
				))}
			</div>
			{isLoading ? (
				<Loader />
			) : (
				<div className='grid grid-cols-3  gap-3  px-5 py-5'>
					{products.map((product) => (
						<Card key={product.id} product={product} />
					))}
				</div>
			)}
		</Layout>
	);
};

export default Home;
