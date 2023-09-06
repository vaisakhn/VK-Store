import React from 'react'
import './ProductDetails.css'
import { getProductId } from '../ApiService/Api'
import { Link, useParams, } from 'react-router-dom'
import { useEffect,useState } from 'react'

function ProductDetails() {

    const {id}= useParams();
    const [productDetails, setProductDetails] = useState({})

    useEffect(() => {
     const fetchProductDetails= async()=>{
        const data = await getProductId(id)
        setProductDetails(data)
     }
     fetchProductDetails()
    }, [id])

    const handleBuyNow =()=>{
        window.confirm('The product is out of stock!')
    }
    
  return (
    <div className='Product-details-container'>
        <img className='product-image' src={productDetails.image} alt="image" />
        <div className="product-info">
            <h2 className="product-title">{productDetails.title} </h2>
            <p className='product-description'>{productDetails.description} </p>
            <p className='product-price'>${productDetails.price} </p>
            <button className='buy-now' onClick={handleBuyNow}>Buy Now</button>
            <Link to='/'><button className='go-back'>Go Home</button></Link>
            
        </div>
    </div>
  )
}

export default ProductDetails