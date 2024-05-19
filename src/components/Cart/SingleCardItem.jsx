import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { increaseCounts, decreaseCounts } from '../../slices/CartItemsSlice';

export default function SingleCardItem({ item, counts, card_items }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [countsOfItem, setCountsOfItem] = useState(counts[item.id])
    console.log(countsOfItem);


    //calculateTotalPrice
    const calculateTotalPrice = () => {
        return (Number(item.price.slice(1)) * countsOfItem).toFixed(2);
    }

    //navigate to product slug
    const navigateToProductSlug = () => {
        navigate(`/product/${item.slug}`);
    }

    //increase and decrease count functions 
    const increaseCount = (itemId) => {
        setCountsOfItem((prev) => ++prev)
        dispatch(increaseCounts(item.id));

        //add one ocurrence of item to localstorage
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const addedItem = storedCartItems.find(item => item.id === itemId);
        const newCartItems = [...storedCartItems, addedItem];
        localStorage.setItem('cart', JSON.stringify(newCartItems));


    }
    const decreaseCount = (itemId) => {
        setCountsOfItem((prev) => --prev)
        dispatch(decreaseCounts(item.id));
        //remove one ocurrence of item from localstorage
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const indexToRemove = storedCartItems.findIndex(item => item.id === itemId);

        // If item with itemId exists, remove it from the array
        if (indexToRemove !== -1) {
            const newCartItems = [...storedCartItems.slice(0, indexToRemove), ...storedCartItems.slice(indexToRemove + 1)];
            localStorage.setItem('cart', JSON.stringify(newCartItems));
        }

    }

    return (
        countsOfItem === 0 ? null :
            <div onClick={navigateToProductSlug} className='grid grid-cols-4 max-[540px]:px-8 max-[640px]:px-20 gap-10 sm:gap-0 sm:grid-cols-10 place-content-between sm:place-items-center sm:place-content-stretch mb-5 sm:pl-16 md:pl-10 p-4 hover:bg-slate-50 transition duration-300 ease-out cursor-pointer'>
                <div className='col-span-4 flex gap-10 sm:gap-2 mt-5 max-[480px]:flex-wrap max-[480px]:justify-center max-[480px]:gap-3 '>
                    <div className='w-44 h-44 flex justify-start items-center scale-125 sm:scale-100'>
                        <img  src={item.images.normal} alt={item.title} />
                    </div>
                    <div className='flex flex-col justify-between ml-3 py-3'>
                        <div>
                            <span className='text-xs text-gray-400 uppercase font-semibold'>{item.sex}</span>
                            <h3 className='tracking-wide font-bold text-lg capitalize'>{item.title}</h3>
                        </div>
                        <div>
                            <div className='info-section'>
                                <p>Color:</p>
                                <span className='capitalize'>{item.color}</span>
                            </div>
                            <div className='info-section'>
                                <p>Material:</p>
                                <span className='capitalize'>{item.material}</span>
                            </div>
                            {/* Render count only if it's greater than 1 */}

                        </div>
                    </div>
                </div>
                <div className='col-span-2'>
                    <h1 className='head-sections-mob'>Price:</h1>
                    <p>{item.price}</p>
                </div>
                <div className='col-span-2 flex flex-col justify-center items-center gap-1'>
                    <h1 className='head-sections-mob'>Quantity:</h1>
                    <button className='button_count' onClick={(e) => { e.stopPropagation(), increaseCount(item.id) }}>+</button>
                    <p>{countsOfItem}</p>
                    <button className='button_count' onClick={(e) => { e.stopPropagation(), decreaseCount(item.id) }}>-</button>

                </div>
                <div className='col-span-4 sm:col-span-2 place-self-center'>
                    <h1 className='head-sections-mob'>Total Price:</h1>
                    ${calculateTotalPrice()}
                </div>
            </div>
    );

}
