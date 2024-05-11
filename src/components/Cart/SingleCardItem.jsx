import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function SingleCardItem({ item, counts, card_items }) {

    const navigate = useNavigate();

    //calculateTotalPrice
    const calculateTotalPrice = () => {
        return (Number(item.price.slice(1)) * counts[item.id]).toFixed(2);
    }

    //navigate to product slug
    const navigateToProductSlug = () => {
        navigate(`/product/${item.slug}`);
    }

    return (
        <div className='grid grid-cols-10 place-items-center mb-5 p-4' onClick={navigateToProductSlug}>
            <div className='col-span-4 flex gap-2 mt-5 '>
                <div className='w-44 h-44 flex justify-start items-center'>
                    <img src={item.images.normal} alt={item.title} />
                </div>
                <div className='flex flex-col justify-between ml-3 py-3'>
                    <div>
                        <span className='text-xs text-gray-400 uppercase font-semibold'>{item.sex}</span>
                        <h3 className='tracking-wide font-bold text-lg capitalize'>{item.title}</h3>
                    </div>
                    <div>
                        <div className='info-section'>
                            <p>Color:</p>
                            <span>{item.color}</span>
                        </div>
                        <div className='info-section'>
                            <p>Material:</p>
                            <span>{item.material}</span>
                        </div>
                        {/* Render count only if it's greater than 1 */}

                    </div>
                </div>
            </div>
            <div className='col-span-2'>
                <p>{item.price}</p>
            </div>
            <div className='col-span-2'>
                <p>{counts[item.id]}</p>
            </div>
            <div className='col-span-2'>
                ${calculateTotalPrice()}
            </div>

        </div>
    )
}
