/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

function ProductCard({ data }: any) {
    return (
        <div className="card w-[248px] h-full  shadow-xl  border-2 border-gray-300 hover:border-[#2C742F] rounded-xl transition-all ease-out duration-500">
            <Image
            className='rounded-xl'
                src={data?.image_url}
                width={248}
                height={100}
                alt={data?.name} />
            <div className="card-body flex-row items-center justify-between">
                <div>
                <h2 className="card-title text-sm">
                    {data?.name}
                </h2>

                <div className="">
                    <p>${data?.price}</p>
                </div>
                <div className="rating rating-xs">
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                </div>
                </div>

                <div  className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    
                            </div>
            </div>
        </div>
    )
}

export default ProductCard