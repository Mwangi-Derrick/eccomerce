import React from "react";
import "../styles/ProductCard.css";
import { useState } from "react";
import { useStateValue } from "../data/StateProvider";
function ProductCard({name,price,oldPrice,id,image,discount}) {
  const [button, setButton] = useState(false);
  const showAddToCart = () => {
    setButton(true);
  }
  const hideAddToCart = () => {
    setButton(false);
  }
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    const itemMatch = state.basket.find((item) => item.id === id);

    if (itemMatch) {
      const updatedBasket = state.basket.map((item) => {
        if (item.id === id) {
          return {...item, quantity: item.quantity += 1 };
        }
        return item;
      });
  
      dispatch(
        { type: "UPDATE_BASKET", basket: updatedBasket });
    }
  
    else {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          name: name,
          price: price,
          OldPrice: oldPrice,
          id: id,
          image: image,
          discount: discount,
          quantity: 1,
        }
      }
      )
   }
  console.log(state.basket)
  }
  
  return (
    <>
          <div onMouseEnter={()=>showAddToCart()} onMouseLeave={()=>hideAddToCart()} className="product" key={id}>
            <img className="product-image" src={image} alt="" />
            <div className="product-info">
          <p className="product-name">{name.length > 30 ? name.substring(0,30).concat("...") : name}</p>
          <div className="product-price">KSh {price}</div>
              <div className="old-product-prc-container">
            <div className="old-product-prc">KSh {oldPrice}</div>
                <div className="product-dsct">-{discount}%</div>
              </div>
            </div>
            <div className="add-to-cart-btn-container">
              <button onClick={addToBasket}
                className = {button===false? "add-to-cart":"cart-appear"} >
                ADD TO CART
              </button>
            </div>
          </div>
      </>
      
  );
}
export default ProductCard;