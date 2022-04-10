import { useState, useEffect } from 'react';
import axios from 'axios';

// The API URL that we want to fetch
// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const useAxios = (axiosParams) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = async (params) => {
		try {
			// request() is to accept the http method, url, headers, and data
			const result = await axios.request(params);
			setIsLoading(false);
			setResponse(result.data);
			// console.log(result);
			// console.log(result.data);
		} catch (error) {
			setError(error);
		}
	};

	useEffect(() => {
		fetchData(axiosParams);
		console.log(axiosParams);
	}, []); // execute only once, especially when page loads

	return {
		response,
		error,
		isLoading
	};
};
