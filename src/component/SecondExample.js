import { useState, Fragment } from 'react';
import { useAxios } from '../axios-hooks/AxiosHooks2';

function SecondExample() {
	const [value, setValue] = useState({
		name: '',
		description: ''
	});

	const { response, error, isLoading, addTool, deleteTool } = useAxios();
	// console.log(response);

	const handleAddTool = () => {
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

	const handleChange = (e) => {
		setValue({
			...value,
			[e.target.name]: e.target.value
		});
	};
	return (
		<div>
			<h1>Tools</h1>
			<hr />
			{response &&
				response.map((tool, idx) => (
					<Fragment key={idx}>
						<h4>{tool.name}</h4>
						<h4>{tool.description}</h4>
						<button onClick={() => handleDeleteTool(tool.id)}>
							Delete {tool.description}
						</button>
						<hr />
					</Fragment>
				))}
			<br />
			<select name="name" id="name" value={value.name} onChange={handleChange}>
				<option value="">Your Tool's Name</option>
				<option value="GraphQL">GraphQL</option>
				<option value="Redux Toolkit">Redux Toolkit</option>
				<option value="Supabase">Supabase</option>
				<option value="MongoDB">MongoDB</option>
			</select>
			<br />
			<select
				name="description"
				id="description"
				value={value.description}
				onChange={handleChange}
			>
				<option value="">Your Tool's Description</option>
				<option value="API Query Engine">API Query Engine</option>
				<option value="State Management for Large Apps">
					State Management for Large Apps
				</option>
				<option value="One of the best BAAS">One of the best BAAS</option>
				<option value="NoSQL Database">NoSQL Database</option>
			</select>
			<br />
			<button onClick={handleAddTool}>Add Tool</button>
		</div>
	);
}

export default SecondExample;
