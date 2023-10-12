import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../redux/Slice'

const Cart = () => {
    const productsInCart = useSelector(state=>state.product)
    const dispatch = useDispatch()
    console.log(productsInCart)
    const deleteCart=()=>{
      dispatch(deleteProduct())
    }
    const cards = productsInCart.map((data)=>{
      return (
        <div key={data.id} className='mt-5 p-6 sm:p-12'>                   
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">                      
            
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.id}</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Category {data.category.name}</h5> */}
         
            <img src={data.images} alt="" />
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.description}</p>
            <button onClick={deleteCart} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Remove from Cart
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
        </div>
                        </div>
      )
    })

  return (
    <div>
      {cards}
      {/* {JSON.stringify(productsInCart)} */}
       {/* <div className="bg-purple-500 text-white p-4 sm:p-12  grid grid-cols-3  gap-9">
          {
            productsInCart.map((data)=>{
              return(
                <div key={data.id} className='mt-5'>                   
<div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">                      
    
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.id}</h5>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Category {data.category.name}</h5>
 
    <img src={data.images} alt="" />
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.description}</p>
    <button  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Remove from Cart
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
</div>
                </div>
              )
            })
          }
      </div> */}
    </div>
  )
}

export default Cart
