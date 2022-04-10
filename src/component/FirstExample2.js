import { useAxios } from '../axios-hooks/AxiosHooks1';
import { useState, Fragment } from 'react';
function FirstExample2() {
	const { response, error, isLoading } = useAxios({
		method: 'GET',
		url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka',
		headers: {
			// no need to stringify
			accept: '*/*'
		}
	});

	return (
		<div>
			<h1>Vodka</h1>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					{error && (
						<>
							<p>Error: {error.message}</p>
						</>
					)}
					{response &&
						response.ingredients.map((ingredient, idx) => (
							<Fragment key={idx}>
								<h4>{ingredient.strABV}</h4>
								<h4>{ingredient.strAlcohol}</h4>
								<h4>{ingredient.strIngredient}</h4>
							</Fragment>
						))}
				</>
			)}
		</div>
	);
}

export default FirstExample2;

// !isLoading && console.log(response);
