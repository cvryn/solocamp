import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkShoppingCartAlbums } from "../../redux/shoppingCart";
import { FaUnlockKeyhole } from "react-icons/fa6";
import "./Checkout.css"
import Confirmation from "./Confirmation";


function Checkout() {
  const albumInShopingCart = useSelector(state => state.session.user.album_in_shopping_cart)
  console.log("🚀 ~ Checkout ~ albumInShopingCart:", albumInShopingCart)

  const [confirmation, setConfirmation] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    setConfirmation(true)
  };

  const calculateSubtotal = () => {
    return albumInShopingCart.reduce((total, album) => total + album.price, 0);
  };
  const taxRate = 0.863;
  const subTotal = calculateSubtotal();
  const salesTax = subTotal * taxRate;
  const total = subTotal + salesTax;

  const formattedCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formattedSubtotal = formattedCurrency(subTotal);
  const formattedSalesTax = formattedCurrency(salesTax);
  const formattedTotal = formattedCurrency(total);

  return !confirmation ? (
    <div className="container-checkout-confirmation-page">
      <div className="container-title-checkout-confirmation">
        <h1>Checkout</h1>
        <span>step 1 of 2</span>
      </div>

      <form onSubmit={handleSubmit} id="container-checkout-form">
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
            <input
              type="number"
              min="10000"
              max="99950"
              value="94016"
              readOnly
            />
          </label>
        </div>

        <div id="container-cart-items-checkout">
          {albumInShopingCart.map(album => (
            <div
              id="container-album-art-details-outer"
              key={album.id}
            >
              <div id="container-album-art-details-inner">
                <img src={album.album_art[0].album_art} />
                <div id="container-album-info-checkout">
                  <span>{album.name}</span>
                  <span>by {album.user_username}</span>
                  <span>digital album</span>
                </div>
              </div>
              <div className="container-value-currency-checkout">
                {Number.isInteger(album.price)
                  ? <>
                    <span style={{ fontSize: "1.5rem" }}>${album.price}.00</span>
                    <span style={{ fontSize: "0.75rem" }}>USD</span>
                  </>
                  : <>
                    <span style={{ fontSize: "1.5rem" }}>${album.price}</span>
                    <span style={{ fontSize: "0.75rem" }}>USD</span>
                  </>
                }
              </div>
            </div>
          ))}

        </div>

        <div id="container-cost-calculations-checkout">
          <div className="container-line-items-checkout">
            <span>subtotal</span>
            <div className="container-value-currency-checkout">
              <span>{formattedSubtotal}</span>
              <span style={{ fontSize: "0.75rem" }}>USD</span>
            </div>
          </div>

          <div className="container-line-items-checkout">
            <span>sales tax (10%)</span>
            <div className="container-value-currency-checkout">
              <span>{formattedSalesTax}</span>
              <span style={{ fontSize: "0.75rem" }}>USD</span>
            </div>
          </div>

          <div className="container-line-items-checkout">
            <span style={{ fontSize: "1.25rem" }}>total</span>
            <div className="container-value-currency-checkout">
              <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{formattedTotal}</span>
              <span style={{ fontSize: "0.75rem" }}>USD</span>
            </div>
          </div>
        </div>

        <button
          type="submit"
        >
          Confirm purchase
        </button>

        <span id="disclaimer-checkout"
          style={{ fontSize: "0.75rem" }}
        >
          <FaUnlockKeyhole /> This is a NON-secure, TLS-encrypted transaction.
        </span>
      </form>


    </div >
  ) : <Confirmation />;
}


export default Checkout
