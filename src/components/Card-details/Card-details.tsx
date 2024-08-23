import "./Card.scss";

function Card() {
  return (
    <div>
      <div className="background-image">
        <div className="text-overlay">
          <h1>blabla</h1>
          <p>fekhleglehnelrkleggege</p>
        </div>
      </div>

      <ul className="list1">
        <li>
      
          <span className="colored-div"> 20g</span> Élément 1
        </li>
        <li>
          <span className="colored-div"> 20g</span> Élément 2
        </li>
        <li>
          <span className="colored-div"> 20g</span> Élément 3
        </li>
        <li>Élément 4</li>
      </ul>
      <ul className="list2">
        <li>Élément 1</li>
        <li>Élément 2</li>
        <li>Élément 3</li>
        <li>Élément 4</li>
      </ul>
    </div>
  );
}
export default Card;
