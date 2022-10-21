import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

function App() {
	const APP_ID = "e03ff13b";
	const APP_KEY = "9278936507c7f2b29d0e848ddf4b5cd8";

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("chicken");

	useEffect(() => {
		getRecipes();
	}, [query]);

	const getRecipes = () => {
		fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
		)
			.then((res) => res.json())
			.then((data) => setRecipes(data.hits));
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch("");
	};

	return (
		<>
			<div className="App">
				<form onSubmit={getSearch} className="search-form">
					<input
						className="search-bar"
						type="text"
						name=""
						id=""
						value={search}
						onChange={updateSearch}
					/>
					<button className="search-button" type="submit">
						Search
					</button>
				</form>
				<div className="recipes">
					{recipes.map((recipe) => (
						<Recipe
							title={recipe.recipe.label}
							calories={recipe.recipe.calories}
							image={recipe.recipe.image}
							key={recipe.recipe.label}
							ingredients={recipe.recipe.ingredients}
							url={recipe.recipe.url}
							dietLabels={recipe.recipe.dietLabels}
							cuisineType={recipe.recipe.cuisineType}
							dishType={recipe.recipe.dishType}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
