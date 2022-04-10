import { useAxios } from '../axios-hooks/AxiosHooks1';

function FirstExample1() {
	const { response, error, isLoading } = useAxios({
		method: 'GET',
		url: 'https://jsonplaceholder.typicode.com/posts/2',
		headers: {
			// no need to stringify
			accept: '*/*'
		}
	});

	return (
		<div>
			<h1>Posts</h1>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					{error && (
						<>
							<p>Error: {error.message}</p>
						</>
					)}
					{response && (
						<>
							<h4>{response.userId}</h4>
							<h4>{response.id}</h4>
							<h4>{response.title}</h4>
							<h4>{response.body}</h4>
						</>
					)}
				</>
			)}
		</div>
	);
}

export default FirstExample1;
