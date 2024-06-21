import React from 'react'
import ProductCard from './ProductCard'
import SmallProductCard from './SmallProductCard'
import { productList, smallProductListData } from '../data/products'
import Image from 'next/image'


function index() {
    return (
        <>
            <div className='container mx-auto'>
                <div className='flex overflow-auto lg:grid lg:grid-cols-5 gap-4 my-10'>
                    {
                        productList.map((product, index) => {
                            return (
                                <ProductCard key={index} data={product} />
                            )
                        })
                    }

                </div>
            </div>


            <div className='flex  container mx-auto gap-6 overflow-auto'>
                    <div className='space-y-4'>
                        <h2>Hot Deals</h2>
                        {
                            smallProductListData.map((product, index) => {
                                return (
                                    <SmallProductCard key={index} data={product} />
                                )
                            })
                        }
                </div>
                    <div className='space-y-4'>
                    <h2>Best Seller</h2>
                        {
                            smallProductListData.map((product, index) => {
                                return (
                                    <SmallProductCard key={index} data={product} />
                                )
                            })
                        }

                    </div>

               
                    <div className='space-y-4'>
                    <h2>Top Rated</h2>
                        {
                            smallProductListData.map((product, index) => {
                                return (
                                    <SmallProductCard key={index} data={product} />
                                )
                            })
                        }

                    </div>
              

                <div>
                    <Image
                     src={"/images/ads/ads1.png"}
                     alt=""
                     width={312}
                     height={426}
                    //  className='object-cover'
                    />
                </div>
            </div>
        </>
    )
}

export default index