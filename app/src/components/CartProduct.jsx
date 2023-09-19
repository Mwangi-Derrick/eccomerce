import React from "react";
import "../styles/CartProduct.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useStateValue } from "../data/StateProvider";

function CartProducts({
  name,
  image,
  price,
  oldPrice,
  discount,
  quantity,
  id,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
 console.log(basket)
  return (
    <article className="cart-product" key={id}>
      <div className="top-cart-product-container"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: "100%",
          height: "60%",
        }}
      >
        <div className="cart-product-image">
          <img src={image} alt="" />
        </div>
        <div className="cart-product-info">
          <p>{name.length > 50 ? name.substring(0, 50).concat("...") : name}</p>
          <div className="cart-prices-info">
          <div className="price">KSh {price}</div>
          <div className="old-price-container">
            <div className="old-prc-container">
              <div className="old">KSh {oldPrice}</div>
              <div className="discount">-{discount}%</div>
            </div>
          </div>
        </div>
        </div>
        
      </div>
      <div className="remove-item">
        <button onClick={removeFromBasket}>
          <DeleteOutlineIcon />
          REMOVE
        </button>
        <div>Quantity:{quantity}</div>
      </div>
    </article>
  );
}

export default CartProducts;
