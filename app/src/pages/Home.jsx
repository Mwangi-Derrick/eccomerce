import React from 'react'
import ProductWrapper from '../components/ProductWrapper';

import '../styles/Home.css';
import ImageCarousel from '../components/ImageCarousel';
function Home() {
  return (
    <main className='main'>
      <ImageCarousel/>
      <ProductWrapper />   
    </main>
  )
}

export default Home