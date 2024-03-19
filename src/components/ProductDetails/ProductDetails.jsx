import React, { useState, useContext } from 'react'
import './ProductDetails.css'
import { BiRightArrowAlt } from 'react-icons/bi';
import { MdOutlineShoppingCart } from "react-icons/md";
import { productColor, productSize } from '../../data/size_color';
import { ShopContext } from '../../Context/ShopContxt';

const priceFormat = (price) =>
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price)

const ProductDetails = (props) => {
  const {product} = props
  const [proSize, setProSize] = useState(1)
  const [proColor, setProColor] = useState(0)
  const {addToCart} = useContext(ShopContext)

  return (
    <div className="top-details">
      <div className="product-images">
        <div className="main-image">
          <img src={product.image} alt="" />
        </div>
        <div className="thums-image">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="shot-info">
        <h2 className='model'>{product.name}</h2>
        <div className="size">
          <h3>
            Select Size
            <BiRightArrowAlt color='#c5cacf' fontSize={20}/>
          </h3>
          <div>
            {
            productSize.map(itemSize => (
            <span className={proSize === itemSize.id ? 'active' : ""}
            key={itemSize.id} onClick={() => setProSize(itemSize.id)}
            >{itemSize.title}</span>
            ))
            }
          </div>
        </div>
        <div className="color">
          <h3>
            <span>Selected Color</span>
            <BiRightArrowAlt color='#c5cacf' fontSize={20} />
            <span>{productColor[proColor].title}</span>
          </h3>
          <div>
            {
            productColor.map((itemColor, index) => (
            <span style={{backgroundColor: itemColor.title}} key={index} onClick={() => setProColor(index)}></span>
            ))
            }
          </div>
        </div>
        <div className="price-bag">
          <button className="btn bag-button" onClick={() => {addToCart(product.id)}}>
            <MdOutlineShoppingCart fontSize={16} />
            Add to bag
          </button>
          <span className='new'>{priceFormat(product.new_price)}</span>
          <span className='old'>{priceFormat(product.old_price)}</span>
        </div>
        <div className="product-category">
          <div>
            <span>Category:</span>
            <span>{product.category}, T-Shirt, Crop Top</span>
          </div>
          <div>
            <span>Tags:</span>
            <span>Modern, Latest</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails