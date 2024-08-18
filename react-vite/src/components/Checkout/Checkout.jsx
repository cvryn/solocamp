import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { thunkShoppingCartAlbumRemove } from "../../redux/shoppingCart";
import { thunkCollectionAlbumAdd } from "../../redux/collection";
import Confirmation from "./Confirmation";
import EmptyShoppingCart from "./EmptyShoppingCart";
import { FaUnlockKeyhole } from "react-icons/fa6";
import "./Checkout.css"
import { useLoaderData } from "react-router-dom";


function Checkout() {
  const currentUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const albumInShopingCart = useLoaderData()

  const [confirmation, setConfirmation] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmation(true);

    albumInShopingCart.forEach(album => {
      const albumData = {
        user_id: currentUser.id,
        album_id: album.id
      };

      dispatch(thunkCollectionAlbumAdd(albumData))
        .then(() => dispatch(thunkShoppingCartAlbumRemove(album.id)));
    });
  };

  const calculateSubtotal = () => {
    return Array.isArray(albumInShopingCart) ? albumInShopingCart?.reduce((total, album) => total + album.price, 0) : 0;
  };

  const taxRate = 0.0863;
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

    albumInShopingCart.length > 0 ? (

      <div className="container-checkout-process-page">
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

          <div className="container-cart-items-checkout">
            {albumInShopingCart?.map(album => (
              <div
                className="container-album-art-details-outer"
                key={album.id}
              >
                <div className="container-album-art-details-inner">
                  <img src={album.album_art[0].album_art} />
                  <div className="container-album-info-checkout">
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
              <span>sales tax (8.63%)</span>
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

    ) : <EmptyShoppingCart />

  ) : <Confirmation albumsInShoppingCart={albumInShopingCart} />
}


export default Checkout
