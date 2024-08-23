import Card from "../Card/Card";
import "./Cards.scss";
import type { IRecipe } from '../../@types/index';

interface CardsProps {
  recipes: IRecipe[]
}

function Cards({ recipes }: CardsProps) {
  return (
    <div className="container-list-card">
      <div className="div-title">
        <h1>Les recettes oRecipes</h1>
      </div>
      <h2 className="sub-title">Voici nos recettes</h2>

      <div className="cards-list">
      {recipes.map(recipe => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
export default Cards;
