import { useEffect, useState } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setData(data);

				setIsLoading(false);
			});
	}, [url]);
	return [data, isLoading];
};

export default useFetch;
