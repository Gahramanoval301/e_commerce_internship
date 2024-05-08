import React from 'react'
import { Link } from 'react-router-dom';

export default function SingleCardItem({ item }) {
    console.log(item);
    const calculateTotalPrice = () => {
        return Number(item.price.slice(1)).toFixed() * item.numbersOfProduct;
    }
    return (
        <div className='grid grid-cols-10'>
            <div className='col-span-4 flex gap-2'>
                <div>
                    <img src={item.images.normal} alt={item.title} />
                </div>
                <div className='flex flex-col justify-between'>
                    <div>
                        <span className='text-xs text-gray-400 uppercase font-semibold'>{item.sex}</span>
                        <h3 className='tracking-wide font-bold text-md'>{item.title}</h3>
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
                    </div>
                </div>
            </div>
            <div className='col-span-2'>
                <p>{item.price}</p>
            </div>
            <div className='col-span-2'>
                <p>{item.numbersOfProduct}</p>
            </div>
            <div className='col-span-2'>
                ${calculateTotalPrice()}
            </div>

        </div>
    )
}
