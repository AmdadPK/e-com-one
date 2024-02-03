import React from 'react'
import "./ProductCard.css"
import { Link } from 'react-router-dom'

const priceFormat = (price) =>
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price)

const ProductCard = (props) => {
  return (
    <div className='product-card'>
      <Link to={`/product/${props.id}`} onClick={window.scrollTo(0, 0)}>
        <div className="image">
          <img src={props.image} alt="" />
        </div>
      </Link>
      <div className='details'>
        <div className="name">{props.name}</div>
        <div className="price">
          <span className='new'>{priceFormat(props.new_price)}</span>
          <span className='old'>{priceFormat(props.old_price)}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard