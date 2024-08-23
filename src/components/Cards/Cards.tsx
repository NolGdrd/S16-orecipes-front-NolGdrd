import Card from "../Card/Card";
import "./Cards.scss";
function Cards() {
  return (
    <div className="container-list-card">
      <div className="div-title">
        <h1>Les recettes oRrecipes</h1>
      </div>
      <h2 className="sub-title">Voici nos recettes</h2>

      <div className="cards-list">
        <Card />
      </div>
    </div>
  );
}
export default Cards;
