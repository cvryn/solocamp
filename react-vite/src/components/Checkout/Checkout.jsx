import NavigationCheckout from "../Navigation/NavigationCheckout";
import { FaUnlockKeyhole } from "react-icons/fa6";
import "./Checkout.css"


function Checkout() {
  return (
    <>
      <NavigationCheckout />
      <div id="container-checkout-page">
        <div id="container-title-checkout">
          <h1>Checkout</h1>
          <span>step 1 of 2</span>
        </div>

        <form id="container-checkout-form">
          <span>To finalize the tax and total, please provide your billing location:</span>

          <div id="container-location-checkout">
            <label className="container-local-fields-checkout">
              Country
              <select>
                <option>United States</option>
              </select>
            </label>

            <label className="container-local-fields-checkout">
              Zip code
              <input />
            </label>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div id="container-cart-items-checkout">
            <div id="container-album-art-details-checkout">
              <img src="https://picsum.photos/300/300?random=1" />
              <div id="container-album-info-checkout">
                <span>title</span>
                <span>artist</span>
                <span>Digital album</span>
              </div>
            </div>
            <div className="container-value-currency-checkout">
              <span style={{ fontSize: "1.5rem" }}>$5.00</span>
              <span style={{ fontSize: "0.75rem" }}>USD</span>
            </div>
          </div>

          <div id="container-cost-calculations-checkout">
            <div className="container-line-items-checkout">
              <span>subtotal</span>
              <div className="container-value-currency-checkout">
                <span>$5.000</span>
                <span style={{ fontSize: "0.75rem" }}>USD</span>
              </div>
            </div>
            <div className="container-line-items-checkout">
              <span>additional contribution</span>
              <div className="container-value-currency-checkout">
                <span>$7.000</span>
                <span style={{ fontSize: "0.75rem" }}>USD</span>
              </div>
            </div>
            <div className="container-line-items-checkout">
              <span style={{ fontSize: "1.25rem" }}>total</span>
              <div className="container-value-currency-checkout">
                <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>$12.000</span>
                <span style={{ fontSize: "0.75rem" }}>USD</span>
              </div>
            </div>
          </div>

          <button type="submit">
            Confirm purchase
          </button>

          <span id="disclaimer-checkout"
            style={{ fontSize: "0.75rem" }}
          >
            <FaUnlockKeyhole /> This is a NON-secure, TLS-encrypted transaction.
          </span>
        </form>

        <span style={{ fontSize: "0.75rem", textDecoration: "underline" }}>skip and remove this album</span>
      </div>
    </>
  );
}


export default Checkout
