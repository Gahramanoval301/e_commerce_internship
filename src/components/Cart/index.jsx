import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleCardItem from './SingleCardItem';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

export default function Cart() {

    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([])

    const card_items = useSelector((state) => state.cartItems.items)
    const all_items = useSelector((state) => state.cartItems.all_items)


    const counts = {};

    card_items.forEach(item => {
        counts[item.id] = (counts[item.id] || 0) + 1;
    });
    console.log(counts);



    //navigate to home page automatically
    const continueToShop = () => {
        navigate('/')
    }


    // Function to remove duplicates from card_items
    const [uniqueItems, setUniqueItems] = useState([]);

    const removeDuplicates = () => {
        const uniqueItemsMap = new Map();
        card_items.forEach(cardItem => {
            uniqueItemsMap.set(cardItem.id, cardItem);
        });
        setUniqueItems([...uniqueItemsMap.values()]);
    };

    // Call removeDuplicates when card_items changes
    useEffect(() => {
        removeDuplicates();
    }, [card_items]);

    const calculateTotalPrice = (counts) => {
        let price = 0;
        for (const key in counts) {
            if (counts.hasOwnProperty(key)) {
                const myItem = uniqueItems.find(item => item.id === parseInt(key));
                if (myItem) {
                    price += counts[key] * (Number(myItem.price.slice(1))).toFixed(2);
                }
            }
        }
        return price;
    }
    const totalPrice = calculateTotalPrice(counts)

    //total items' amount
    const sumObjectValues = (obj) => {
        let sum = 0;
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                sum += obj[key];
            }
        }
        return sum;
    }

    const totalSum = sumObjectValues(counts);

    return (
        <div className='grid grid-cols-10'>
            <div className='col-span-8'>
                <h1 className='m-5 font-bold text-3xl tracking-wider'>Shopping Bag</h1>
                <div className=' m-5 mr-1 border-2 border-secondary-dark rounded-lg shadow-xl '>
                    <div className='grid grid-cols-10 place-items-center p-3 bg-primary-light rounded-t-lg shadow-md font-semibold '>
                        <h1 className='col-span-4 '>Product</h1>
                        <h1 className='col-span-2 '>Price</h1>
                        <h1 className='col-span-2 '>Quantity</h1>
                        <h1 className='col-span-2 '>Total Price</h1>
                    </div>
                    <div>
                        {uniqueItems.map((cartItem, index) => {
                            return <>
                                <SingleCardItem key={cartItems.id} item={cartItem} counts={counts} card_items={card_items} />
                                {index !== uniqueItems.length - 1 && <hr className='border-primary-light' />}
                            </>
                        })}
                    </div>
                </div>
            </div>
            <div className='col-span-2 m-5 flex flex-col justify-end '>
                <div className='border-2 rounded-xl border-primary-darkest bg-secondary-light p-3 pb-5 flex flex-col gap-5'>
                    <div>
                        <h1 className='font-bold tracking-wider text-pink-600 mb-1'>Checkout</h1>
                        <hr className=' border-primary-darkest' />
                    </div>
                    <div>
                        <div className='info-section'>
                            <p>Total Items:</p>
                            <span>{totalSum}</span>
                        </div>
                        <div className='info-section'>
                            <p>Total Price</p>
                            <span>${totalPrice}</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <button className='btn-product'>Apply</button>
                        <button className='btn-product' onClick={continueToShop}>Continue to Shop</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
