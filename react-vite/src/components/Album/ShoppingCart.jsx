import './ShoppingCart.css';


const ShoppingCart = ({ cartItems = [], onRemoveItem, onCheckout }) => {
  const total = Array.isArray(cartItems)
    ? cartItems.reduce((acc, item) => acc + (parseFloat(item.price) || 0), 0)
    : 0;

  return (
    <div className="shopping-cart-album-details">
      <h3>Shopping Cart</h3>
      <br />
      {Array.isArray(cartItems) && cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {Array.isArray(cartItems) && cartItems.map((item) => (
              <li key={item.id} className='albums-added-to-shopping-cart'>
                <span>{item.name} </span>
                <div style={{ fontWeight: 'bold' }}>
                  ${parseFloat(item.price).toFixed(2)}
                </div>
                <div>
                  <button
                    style={{ border: 'none', backgroundColor: 'transparent', color: 'RGB(6, 135, 245)' }}
                    onClick={() => onRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                  <hr />
                </div>
                <br />
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <div style={{ fontWeight: 'bold' }}>Total: ${total.toFixed(2)}</div>
            <br />
            <span style={{ fontSize: '12px' }}>taxes calculated at checkout</span>
          </div>
          <br />
          <button onClick={onCheckout} className='checkout-button-album-details'>Checkout</button>
        </>
      )}
    </div>
  );
};


export default ShoppingCart;
