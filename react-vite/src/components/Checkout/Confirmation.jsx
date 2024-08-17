import { Link } from "react-router-dom";
import "./Checkout.css"


function Confirmation() {
  return (
    <div className="container-checkout-confirmation-page">
      <div className="container-title-checkout-confirmation">
        <h1>Confirmation</h1>
        <span>step 2 of 2</span>
      </div>

      <p id="container-confirmation-message">
        Congratulations, you have successfully "purchased" the following albums, and you didn't even have to pay a dime!
      </p>

      <button type="button">
        <Link to="/user?tab=collection">Go to collections</Link>
      </button>


    </div>
  );
}


export default Confirmation;
