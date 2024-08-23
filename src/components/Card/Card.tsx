import "./Card.scss";
import type { IRecipe } from '../../@types';

interface CardProps {
  recipe: IRecipe;
}

function Card({ recipe }: CardProps) {
  return (
    <article className="cards">
      <div className="card">
        <div className="card-header">
          <img src={recipe.thumbnail} alt={recipe.title} />
        </div>
        <div className="card-body">
          <h2>{recipe.title}</h2>
          <p>{recipe.difficulty}</p>
          <div className="btn-container">
            <a href={`/${recipe.slug}`} className="btn">
              Voir Détails
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
export default Card;
