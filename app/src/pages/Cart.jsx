import React from "react";
import "../styles/Cart.css";
import CartProduct from "../components/CartProduct";
import { useStateValue } from "../data/StateProvider";

function Cart() {
  const [{ basket }] = useStateValue();
  const TotalPrice = () => {
   const prices = basket.map(( item) => {
     const prc = item.price.replace(",", "")
     return (parseInt(prc) * item.quantity);
     })
 return  (prices.reduce((accumulation, price) => { return accumulation + price },0)).toLocaleString();
  }
     
  const quantity = () => {
    return basket?.reduce((total, item) => { return total + item.quantity }, 0)
  }
  return (
    <main className="cart-page">
      <div className="cart-review">
        <header className="cart-header">
          <h3 className="lg:text-xl font-medium">Cart({quantity() })</h3>
        </header>
        {basket.map(item => (
          <CartProduct
            image={item.image} name={item.name} id={item.id} price={item.price} discount={item.discount}
            oldPrice={item.OldPrice} quantity={item.quantity}
          />
        )
        )}
      </div>

      <div className="cart-summary">
        <h3>CART SUMMARY</h3>
        <div className="sub-total">
          <p>subtotal</p>
          <p className="total">KSh {TotalPrice()}</p>
        </div>
        <p className="delivery-fees">Delivery fees not included yet.</p>
        <div className="free-delivery">Free delivery</div>
        <div className="checkout-button-container">
          <button className="checkout-button">CHECKOUT(KSh {TotalPrice()})</button>
        </div>
      </div>
    </main >
);

}

export default Cart;
