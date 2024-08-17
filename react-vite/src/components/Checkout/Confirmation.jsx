import { Link } from "react-router-dom";
import "./Checkout.css"


function Confirmation({ albumsInShoppingCart }) {
  return (
    <div className="container-checkout-process-page">

      <div className="container-title-checkout-confirmation">
        <h1>Confirmation</h1>
        <span>step 2 of 2</span>
      </div>

      <div className="container-checkout-process-height">
        {
          albumsInShoppingCart.length > 1
            ? <p>
              Congratulations, you have successfully "purchased" the following albums, and you didn't even have to pay an actual dime!
            </p>
            : <p>
              Congratulations, you have successfully "purchased" the following album, and you didn't even have to pay an actual dime!
            </p>
        }

        <div
          className="container-cart-items-checkout"
          style={{ margin: "40px 0" }}
        >
          {albumsInShoppingCart?.map(album => (
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

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginBottom: "40px"
        }}>
          <span>Actual cost to you: $0</span>
          <h2>Enjoy!</h2>
        </div>

        <button
          type="button"
          style={{ marginTop: "auto" }}
        >
          <Link to="/user?tab=collection">Go to collections</Link>
        </button>
      </div>

    </div>
  );
}


export default Confirmation;
