import tamaleCardImg from "../assets/card-images/bleaf.jpg";
import "../styles/card.css";

function Card() {
  return (
    <div className="card">
      <div className="card-img">
        <img src={tamaleCardImg} alt="tamale"></img>
      </div>
      <div className="card-desc">
        <h3>card name</h3>
        <p>card description</p>
        <div className="btn-container">
          <div className="btn">add to cart</div>
          <div className="btn btn-share">Share</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
