import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router'
import { initialState, reducer, types } from '../../reducer';
import axios from 'axios';

export default function ProductSlug() {
    const url = 'https://65217450a4199548356d3a5c.mockapi.io/api/v1/products'
    const { slug } = useParams();

    useEffect(() => {
        axios.get(url).then((response) => {
            dispatch(
                {
                    type: types.GET_PRODUCTS,
                    payload: response.data[0].products
                })
        })
    }, [])
    const [state, dispatch] = useReducer(reducer, initialState)
    const filteredProduct = state.products.filter(product => product.slug === slug)
    // console.log(filteredProduct[0]);
    return (
        <div>ProductSlug</div>
    )
}
