import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContxt'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrum/Breadcrum'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import DescriptionBox from '../components/DescriptionBox/DescriptionBox'
import RelatedCollection from '../components/RelatedCollection'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((item) => item.id === Number(productId))
  return (
    <div className='product-details'>
      <div className="container">
        <Breadcrum product={product} />
        <ProductDetails product={product} />
        <DescriptionBox />
        <RelatedCollection />
      </div>
    </div>
  )
}

export default Product