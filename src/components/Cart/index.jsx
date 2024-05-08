import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleCardItem from './SingleCardItem';
import { useNavigate } from 'react-router';

export default function Cart() {
    const cart_url = 'https://65217450a4199548356d3a5c.mockapi.io/api/v1/cart';
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        axios.get(cart_url).then(({ data }) => {
            setCartItems(data);
        })
    }, [])

    const continueToShop = () => {
        navigate('/')
    }

    const totalPrice = cartItems.reduce((acc, item) => {
        return acc + (Number(item.price.slice(1)).toFixed() * item.numbersOfProduct)
    }, 0)

    const totalAmount = cartItems.reduce((acc, item) => {
        return acc + item.numbersOfProduct
    }, 0)

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
                    {cartItems.map((cartItem) => {
                        return <SingleCardItem key={cartItems.id} item={cartItem} />
                    })}
                </div>
            </div>
            <div className='col-span-2'>
                <h1>Checkout</h1>
                <div>
                    <div>
                        <p>Total Items</p>
                        <span>{totalAmount}</span>
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
