import axios from 'axios';
import React, { useEffect, useReducer } from 'react'
import { Link } from "react-router-dom";
import { initialState, reducer, types } from '../../reducer';


export default function ProductCard({ product }) {
    const url = 'https://65217450a4199548356d3a5c.mockapi.io/api/v1/products'
    const cart_url = 'https://65217450a4199548356d3a5c.mockapi.io/api/v1/cart'

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < product.star; i++) {
            stars.push(<i key={i} className="fa-solid fa-star text-yellow-500 transition duration-300"></i>);
        }
        return stars;
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get(url).then(({ data }) => {
            dispatch({ type: types.GET_PRODUCTS, payload: data[0].products });
        })


    }, [])
    const addToCart = (itemId) => {
        const addedItem = state.products.find(({ id }) => id === itemId)
        addedItem.numbersOfProduct += 1
        console.log(addedItem.isAdded, addedItem.numbersOfProduct);

        if (addedItem.isAdded === "false") {
            axios.post(cart_url, addedItem)
                .then(function (response) {
                    console.log(response);
                })
        }
        axios.put(`${cart_url}/${itemId}`, { ...addedItem, "numbersOfProduct": addedItem.numbersOfProduct })
            .then((response) => {
                console.log(response);
            })
        console.log(addedItem.isAdded);
        addedItem.isAdded = "true"
    }
    // console.log(state.products);

    return (
        <Link to={`/${product.slug}`}>
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
