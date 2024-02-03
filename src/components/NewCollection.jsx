import React from 'react'
import new_product from '../data/new_collections';
import ProductCard from './ProductCard/ProductCard';

const NewCollection = () => {
  return (
    <div className='new-collection'>
      <div className="container">
        <div className="section-header">
          <h5>E-Shop</h5>
          <h2>New Arrivals</h2>
        </div>
        
        <div className="new-product">
          {
            new_product.map((product, index) => (
              <ProductCard id={product.id} key={index} image={product.image} name={product.name} new_price={product.new_price} old_price={product.old_price} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default NewCollection