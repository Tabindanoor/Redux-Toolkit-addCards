import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const {id} = useParams();
  console.log(id)
  const product = useSelector(state=>state.product.product)
  console.log(product,"this")
  const myproduct = product.find((p) => p.id === id);
  console.log(myproduct);
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <p>{id} </p>
      <div>
      <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <img src={product.images} alt={product.title} />
      {/* Display other product details here */}
    </div>
      </div>
        <div>get data of the specific product </div>
    </div>
  )
}

export default ProductDetail
