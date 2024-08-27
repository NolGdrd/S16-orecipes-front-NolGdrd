import "./Card-details.scss";
import type { IRecipe } from "../../@types/index";

interface CardProps {
  recipe: IRecipe;
  ingredients: IRecipe[];
}

function Card({ recipe }: CardProps) {
  return (
    <div className="recipe-details">
      <div className="background-image" style={{backgroundImage: `url(${recipe.thumbnail})`}}>
        <div className="text-overlay">
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
        </div>
      </div>

      <ul className="list1">
        {recipe.ingredients.map(ingredient => (
          <li key={ingredient.id}>
            <span className="colored-div">{ingredient.quantity}{ingredient.unit}</span> {ingredient.name}
          </li>
        ))}
      </ul>
      <ul className="list2">
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ul>
    </div>
  );
}
export default Card;
