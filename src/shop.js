import React from 'react'
import data from './utils/data'
import Navbar from './components/navbar'
import ProductItem from './components/productItem'
import Footer from './components/footer';



export default function shop() {
  return (
    <>

<Navbar />

<div className='productdisplay'>
{data.products.map((product) => (
  <ProductItem product ={product}  key={product.slug}></ProductItem>
))}
</div>

<Footer />
    </>
  )
}
