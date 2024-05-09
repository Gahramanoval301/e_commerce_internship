import axios from 'axios';
import React, { useEffect, useReducer } from 'react'
import { Link } from "react-router-dom";
import { initialState, reducer, types } from '../../reducer';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../slices/CartItemsSlice';

export default function ProductCard({ product }) {
    const url = 'https://65217450a4199548356d3a5c.mockapi.io/api/v1/products'
    const dispatch_slice = useDispatch()
    const card_items = useSelector((state) => state.cartItems.items)

    //render stars based on their amount
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < product.star; i++) {
            stars.push(<i key={i} className="fa-solid fa-star text-yellow-500 transition duration-300"></i>);
        }
        return stars;
    }


    useEffect(() => {
        axios.get(url).then(({ data }) => {
            dispatch({ type: types.GET_PRODUCTS, payload: data[0].products });
        })
    }, [])

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (itemId) => {
        const addedItem = state.products.find(({ id }) => id === itemId)
        // addedItem.numbersOfProduct += 1;
        dispatch_slice(addItem(addedItem));
        const counts = {};
        card_items.forEach(item => {
            counts[item.id] = (counts[item.id] || 0) + 1;
        });
        addedItem.numbersOfProduct = counts[addedItem.id]
        console.log(addedItem);
    }

    // console.log(state.products);

    return (
        <Link>
            <div className='product_card'>
                <div className='product_normal_image'>
                    <img className=' w-full h-full' src={product.images.normal} alt={product.title} />
                </div>
                <h3 className='capitalize line-clamp-1 text-lg'>{product.title}</h3>
                <div className='stars'>{renderStars()}</div>
                <div className='price_icons'>
                    <p>{product.price}</p>
                    <div className='icons_box'>
                        <Link><i className="fa-solid fa-heart hover:rotate-45 hover:text-red-600"></i></Link>
                        <Link onClick={() => addToCart(product.id)}><i className="fa-solid fa-cart-plus hover:text-primary-darkest hover:scale-105"></i></Link>
                    </div>
                </div>
            </div>
        </Link>
    )
}
