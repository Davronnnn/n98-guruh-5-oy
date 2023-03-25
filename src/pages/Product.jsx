import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Layout from '../Layout/Layout';

const Product = () => {
	const [user, setUser] = useState({});
	const params = useParams();
	console.log(params);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users/' + params.id)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setUser(data);
			});
	}, [params.id]);

	return <Layout>{user.name}</Layout>;
};

export default Product;
