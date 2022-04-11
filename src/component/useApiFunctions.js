import { useAxios } from '../axios-hooks/AxiosHooks2';
const useApiFunctions = () => {
	const { response, error, isLoading, addTool, deleteTool } = useAxios();

	const handleAddTool = (value) => {
		addTool({
			method: 'POST',
			url: 'http://localhost:3001/tools',
			headers: {
				accept: '*/*'
			},
			data: {
				id: Math.random(),
				name: value.name,
				description: value.description
			}
		});
	};

	const handleDeleteTool = (id) => {
		deleteTool({
			method: 'DELETE',
			url: `http://localhost:3001/tools/${id}`,
			headers: {
				accept: '*/*'
			},
			data: {
				id: id
			}
		});
	};

	return { isLoading, response, error, handleAddTool, handleDeleteTool };
};

export default useApiFunctions;
