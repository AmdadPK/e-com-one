import React, { useContext } from 'react'
import './CartItems.css'
import { Link } from "react-router-dom";
import { ShopContext } from '../../Context/ShopContxt'
import removeImg from '../../assets/cart_cross_icon.png'

const priceFormat = (price) =>
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price)

export const CartItems = () => {
  const {all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext)
  return (
    <div className='cart-items'>
      <table className='table'>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            all_product.map((e) => {
              if (cartItems[e.id] > 0) {
                return (
                  <tr>
                    <td>
                      <div className="image-title">
                        <img src={e.image} alt="" />
                        <div className="title">{e.name}</div>
                      </div>
                    </td>
                    <td>
                      <div className="price">{priceFormat(e.new_price)}</div>
                    </td>
                    <td>
                      <div className="quantity">
                        <span>{cartItems[e.id]}</span>
                      </div>
                    </td>
                    <td>
                      <div className="total">{priceFormat(e.new_price*cartItems[e.id])}</div>
                    </td>
                    <td>
                      <div className="remove">
                        <img src={removeImg} alt="" onClick={() => {removeFromCart(e.id)}} />
                      </div>
                    </td>
                  </tr>
                )
              }
            })
          }
        </tbody>
      </table>

      <div className="promo-code">
        <div className="promo">
          <input type="text" className='input-filed' placeholder='Promo code here' />
          <button type='submit'>Apply</button>
        </div>
        <div className="update-cart">
          <Link to="/">Update Cart</Link>
        </div>
      </div>

      <div className="cart-total">
        <div className="inner">
          <h1>Cart Totals</h1>
          <div className="info">
            <div className="details">
              <div>
                <span>Subtotal</span>
                <span>{priceFormat(getTotalCartAmount())}</span>
              </div>
              <div>
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div>
                <span>Total</span>
                <span>{priceFormat(getTotalCartAmount())}</span>
              </div>
            </div>
            <div className="checkout">
              <button>Proceed to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
