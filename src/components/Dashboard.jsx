import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Dashboard =  () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const response  = fetch("https://api.escuelajs.co/api/v1/products")
    .then(data=>data.json())
    .then(response=>setProducts(response))
    
    console.log(response)
  }, [])
  
  
  
  
  return (
    <div className=''>
      <div className="bg-pink-500  sticky-bottom  text-white fixed w-full p-4"><Link to="/cart">I have 0 bags here </Link> </div>
      <div className="bg-purple-500 text-white p-4 sm:p-12  grid grid-cols-3  gap-9">
          {
            products.map((data,index)=>{
              return(
                <div className='mt-5'>   
                
<div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      
                              
    <Link to={"/productDetail"}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Category {data.category.name}</h5>
    </Link>
    <img src={data.images} alt="" />
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.description}</p>
    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Add to Cart
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
</div>
                </div>
              )
            })
          }
      </div>


    </div>
  )
}

export default Dashboard
