import React from 'react'
import data_product from '../data/data'
import ProductCard from './ProductCard/ProductCard';

const RelatedCollection = () => {
  return (
    <div className="related-collection">
      <div className="section-header">
        <h5>E-Shop</h5>
        <h2>Related Product</h2>
      </div>
      <div className="related-product">
        {
          data_product.map((product, index) => (
            <ProductCard id={product.id} key={index} image={product.image} name={product.name} new_price={product.new_price} old_price={product.old_price} />
          ))
        }
      </div>
    </div>
  )
}

export default RelatedCollection