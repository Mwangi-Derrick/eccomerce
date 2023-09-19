import React from 'react'
import { useState } from 'react'
import { createContext } from 'react';
function Test() {
    //add a update cart state and the initialize state to object properties with empty strings
    const [cart, updateCart] = useState([{
        name: '',
        price: '',
        oldPrice: '',
        image:'',
    }]);
    //implement an event handler function updates the cart when an item is added to cart
    const handleCart = (product) => {
        //call the "updateCart" function that updates the perevois sate of the cart array
        updateCart((previous) => {
            //copy the prevous state
            let updatedCart = [...previous]
            //add a new item to the cart array
            let newItem = {
                 name: product.name,
                price: product.price,
                oldPrice: product.oldPrice,
                image: product.image,
                id: product.id,
                quantity: 1,     
            }
              // find whether an item already exists in the cart
            let matchingItem = product.id;
            //initialize the cart quantity to a variable
            let quantity = updatedCart.quantity;
            //use array.find method to find if there is a matching item in the array
            updatedCart.find(() => { matchingItem === product.id })
            if (matchingItem) { quantity += 1 }//if an item already exists increment its quantity
            else {
                updatedCart = updateCart.push(newItem);//otherwise add a new item
            }
            //return the updated array
            return updatedCart;
        });
    }
  return (
    <div>Test</div>
  )
}

export default Test