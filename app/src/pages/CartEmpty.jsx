import React from 'react'
import "../styles/CartEmpty.css";
import { Link } from 'react-router-dom';
import cart from  "../assets/cart.png"
function CartEmpty() {
    
  return (
      <main className='cart-status'>
          <div className='cart-is-empty'>
              <img src={cart}  alt=''/>
              <h3 className='inform-cart-is-empty'>Your cart is empty!</h3>
              <p className='message'>Browse our products, brands and categories</p>
              <Link to="/" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                  <button  className='start-shopping'>
                  START SHOPPING
              </button>
              </Link>
          </div>
          
    </main>
  )
}

export default CartEmpty