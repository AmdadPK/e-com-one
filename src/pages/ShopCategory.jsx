import React, { useContext } from 'react';
import './css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContxt';
import ProductCard from '../components/ProductCard/ProductCard';

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='all-category-product'>
      <div className="banner">
        <img src={props.banner} alt="" />
      </div>
      <div className="container">
        <div className="category-product">
          {
            all_product.map((product, index) => {
              //console.log(product.name);
              if (props.category === product.category) {
                return <ProductCard id={product.id} key={index} image={product.image} name={product.name} new_price={product.new_price} old_price={product.old_price} />
              }else {
                return null;
              }
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ShopCategory;
