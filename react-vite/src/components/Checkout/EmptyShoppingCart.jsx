import { Link } from "react-router-dom";
import "./Checkout.css"


function EmptyShoppingCart() {
  return (
    <div className="container-checkout-process-page">

      <div className="container-title-checkout-confirmation">
        <h1>Shopping Cart</h1>
      </div>

      <div className="container-checkout-process-height">
        <p>
          Your shopping cart is empty. Go find some albums to buy!
        </p>

        <button
          type="button"
          style={{ marginTop: "auto" }}
        >
          <Link to="/albums">Go checkout albums</Link>
        </button>
      </div>

    </div>
  );
}


export default EmptyShoppingCart;
