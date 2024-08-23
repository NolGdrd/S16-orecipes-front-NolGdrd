import  "./Card.scss";

function Card(){
  return(


    <article className="cards">

    <div className="card">
      <div className="card-header">
        <img src="img.png" />
      </div>
      <div className="card-body">
        <h2>Titre de la Carte</h2>
        <p>description.</p>
        <div className="btn-container">
          <a href="#" className="btn">
            Voir Détails
          </a>
        </div>
      </div>
    </div>   

  </article>
  )
}
export default Card