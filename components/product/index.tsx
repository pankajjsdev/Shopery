import React from 'react'
import ProductCard from './ProductCard'
import { productList } from '../data/products'

function index() {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-5 gap-3 my-10'>
                {
                    productList.map((product, index)=>{
                        return(
                            <ProductCard key={index}  data={product}/>
                        )
                    })
                }
               
            </div>
        </div>
    )
}

export default index