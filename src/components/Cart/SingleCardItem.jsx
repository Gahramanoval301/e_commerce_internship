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
            <div className='grid grid-cols-10 place-items-center mb-5 p-4'>
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
                    <button onClick={() => increaseCount(item.id)}>+</button>
                    <p>{countsOfItem}</p>
                    <button onClick={() => decreaseCount(item.id)}>-</button>

                </div>
                <div className='col-span-2'>
                    ${calculateTotalPrice()}
                </div>
            </div>
    );

}
