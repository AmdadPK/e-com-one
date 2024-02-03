import React from 'react'
import data_product from '../data/data';
import ProductCard from './ProductCard/ProductCard';

const NewCollection = () => {
  return (
    <div className='popular-collection'>
      <div className="container">
        <div className="section-header">
          <h5>E-Shop</h5>
          <h2>Popular Items</h2>
        </div>
        
        <div className="popular-product">
          {
            data_product.map((product, index) => (
              <ProductCard id={product.id} key={index} image={product.image} name={product.name} new_price={product.new_price} old_price={product.old_price} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default NewCollection