import tamaleCardImg from "../assets/card-images/bleaf.jpg";
import "../styles/card.css";

function Card() {
  return (
    <div className="tamale-card">
      <img src={tamaleCardImg} className="tamale-image" />
      <div className="card-description">
        <h3>Name</h3>
        <p>descrition</p>
        <p>Price per 6: $</p>
        <p>Amount</p>
        <p>Total Price: $</p>
      </div>
    </div>
  );
}

export default Card;
