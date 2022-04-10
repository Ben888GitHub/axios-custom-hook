import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxios = (axiosParams) => {
	const [response, setResponse] = useState([]);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	// GET Request
	const getTools = async () => {
		try {
			const result = await axios.get('http://localhost:3001/tools');
			setIsLoading(false);
			setResponse(result.data);
			// console.log(result);
			// console.log(result.data);
		} catch (error) {
			setError(error);
		}
	};

	useEffect(() => {
		getTools();
	}, []);

	// POST Request
	const addTool = async (axiosParams) => {
		try {
			// request() is to accept the http method, url, headers, and data
			const result = await axios.request(axiosParams);
			setIsLoading(false);
			// setResponse(result.data);
			console.log(result);
			console.log(axiosParams);
			setResponse([...response, result.data]);
			// console.log(result.data);
		} catch (error) {
			setError(error);
		}
	};

	// DELETE Request
	const deleteTool = async (axiosParams) => {
		try {
			// request() is to accept the http method, url, headers, and data
			const result = await axios.request(axiosParams);
			setIsLoading(false);
			// setResponse(result.data);
			console.log(result);
			console.log(axiosParams);
			setResponse(response.filter((tool) => tool.id !== axiosParams.data.id));
			// console.log(result.data);
		} catch (error) {
			setError(error);
		}
	};

	return {
		response,
		error,
		isLoading,
		addTool,
		deleteTool
	};
};
