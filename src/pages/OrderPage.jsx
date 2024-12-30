import Card from "../Components/card";
import "../styles/OrderPage.css";

function OrderPage() {
  return (
    <div className="order-page">
      <div className="page-intro">
        <h2>Order Tamales</h2>
        <p>
          We require a 2 days notice in all orders, our tamales are sold in
          orders of 6, for delivery only!
        </p>
      </div>
      <div className="tamale-list">
        <Card />

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default OrderPage;
