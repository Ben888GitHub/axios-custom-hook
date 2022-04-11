import { useState, Fragment } from 'react';
import useApiFunctions from './useApiFunctions';

const SecondExample2 = () => {
	const { handleAddTool, handleDeleteTool, isLoading, response, error } =
		useApiFunctions();

	const [value, setValue] = useState({
		name: '',
		description: ''
	});

	const handleChange = (e) => {
		setValue({
			...value,
			[e.target.name]: e.target.value
		});
	};

	return (
		<>
			<h1>Tools</h1>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					{error && <p>Error: {error.message}</p>}
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
					<hr />

					<br />
					<select
						name="name"
						id="name"
						value={value.name}
						onChange={handleChange}
					>
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
					<button onClick={() => handleAddTool(value)}>Add Tool</button>
				</>
			)}
		</>
	);
};

export default SecondExample2;
