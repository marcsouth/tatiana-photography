import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductItem({product}) {
  return (
    <div className='productcard'>
        
        <Link href={`/product/${product.slug}`}>

        <a>

        <img   src={product.image} alt={product.name}  className="imageshop"/>
         
        </a>

        </Link>

        <Link href={`/product/${product.slug}`}>
        
        <a>

        <h2>{product.name}</h2>

        </a>
  
         </Link>
        <p>${product.price}</p>
        <button className='primary-button' type="button">

            Add to Cart
    
        </button>

    </div>
  )
}
