import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleCardItem from './SingleCardItem';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

export default function Cart() {
    const dispatch_amount = useDispatch();
    // const cart_url = 'https://65217450a4199548356d3a5c.mockapi.io/api/v1/cart';
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([])

    const card_items = useSelector((state) => state.cartItems.items)
    const all_items = useSelector((state) => state.cartItems.all_items)
    console.log(all_items);


    const counts = {};
    card_items.forEach(item => {
        counts[item.id] = (counts[item.id] || 0) + 1;
    });
    console.log(counts);


    useEffect(() => {

    }, [])

    const continueToShop = () => {
        navigate('/')
    }

    const totalPrice = card_items.reduce((acc, item) => {
        return acc + (Number(item.price.slice(1)).toFixed() * item.numbersOfProduct)
    }, 0)

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


    const [uniqueItems, setUniqueItems] = useState([]);

    // Function to remove duplicates from card_items
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

    
    return (
            <div className='grid grid-cols-10 gap-5'>
                <div className='col-span-8'>
                    <h1>Shopping Bag</h1>
                    <div className='p-5 m-5 border-2 border-secondary-dark rounded-lg shadow-xl'>
                        <div className='grid grid-cols-10'>
                            <h1 className='col-span-4'>Product</h1>
                            <h1 className='col-span-2'>Price</h1>
                            <h1 className='col-span-2'>Quantity</h1>
                            <h1 className='col-span-2'>Total Price</h1>
                        </div>
                        {uniqueItems.map((cartItem) => {
                            return <SingleCardItem key={cartItems.id} item={cartItem} counts={counts} card_items={card_items} />
                        })}
                    </div>
                </div>
                <div className='col-span-2'>
                    <h1>Checkout</h1>
                    <div>
                        <div>
                            <p>Total Items</p>
                            <span>{totalSum}</span>
                        </div>
                        <div>
                            <p>Total Price</p>
                            <span>{totalPrice}</span>
                        </div>
                    </div>
                    <div>
                        <button>Apply</button>
                        <button onClick={continueToShop}>Continue to Shop</button>
                    </div>
                </div>
            </div>

        )
    }
