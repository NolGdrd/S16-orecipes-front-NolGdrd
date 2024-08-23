import "./Cards.scss";
function Cards(){


  return (<div className="container-list-card">
  <div className="div-title">
    <h1>Les recettes oRrecipes</h1>
  </div>
  <h2 className="sub-title">Voici nos recettes</h2>
  <div className="card">
    <div className="card-header">
      <img src="img.png"/>
    </div>
    <div className="card-body">
      <h2>Titre de la Carte</h2>
      <p>description.</p>
      <div className="btn-container">
        <a href="#" className="btn">Voir Détails</a>
      </div>
    </div>
  </div>
</div>)
}
export default Cards;