import React from 'react'
import ProductCard from './ProductCard';
import '../styles/ProductWrapper.css';
import {brands} from "../assets/stock.js";
function ProductWrapper() {
  return (
    <section className='products-wrapper'>
      <div className='products-header'><h2>Products</h2></div>
      <div className='products'>
        {brands.map((item,index) => (
          <ProductCard
            key={item.id}
            price={parseInt(item.price).toLocaleString()}
            oldPrice={parseInt(item.OldPrice).toLocaleString()}
            image={item.image}
            id={item.id}
            name={item.name}
            discount={parseInt((parseInt(item.OldPrice) - parseInt(item.price)) * 100 / parseInt(item.OldPrice))}
            index= {index}
          />
        ))}
      </div>
    </section>
  );
}
export default ProductWrapper;
