import React from "react";

const Recipe = ({
	title,
	calories,
	image,
	ingredients,
	url,
	dietLabels,
	cuisineType,
	dishType,
}) => {
	return (
		<div className="recipe">
			<img src={image} className="image" alt="" />
			<p>{Math.round(calories)}</p>
			<h1>{title}</h1>
			<p>
				{dietLabels} | {cuisineType} | {dishType}
			</p>
			<ol>
				{ingredients.map((ingredient) => (
					<li>{ingredient.text}</li>
				))}
			</ol>
			<a href={url}>Recipe</a>
		</div>
	);
};

export default Recipe;
