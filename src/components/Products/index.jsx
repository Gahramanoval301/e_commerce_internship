import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import ProductCard from './productCard';
import { initialState, reducer, types } from '../../reducer';
import { useSelector } from 'react-redux';

const url = 'https://65217450a4199548356d3a5c.mockapi.io/api/v1/products';

export default function Products() {
    const selectedSexValue = useSelector((state) => state.options.sex_value)
    const selectedTypeValue = useSelector((state) => state.options.type_value)
    const searchText = useSelector((state) => state.options.searched_text);
    console.log(searchText);
    useEffect(() => {
        axios.get(url).then((res) => {
            dispatch({ type: types.GET_PRODUCTS, payload: res.data[0].products });
        })
    }, [])
    console.log(selectedTypeValue);
    const [state, dispatch] = useReducer(reducer, initialState)

    const filteredProducts = state.products.filter(({ sex, category, title }) => {
        const sexMatch = !selectedSexValue || sex === selectedSexValue;
        const typeMatch = selectedTypeValue === 'all_category' || category === selectedTypeValue;
        const titleMatch = (!searchText || title.toLowerCase().includes(searchText.toLowerCase()));

        if (sexMatch && titleMatch) {
            if (selectedTypeValue === 'all_category' || selectedTypeValue === '') {
                return true; // Include all products matching sex and title if type is all or empty
            } else {
                return typeMatch; // Include products matching sex, type, and title
            }
        } else {
            return false; // Exclude products that don't match sex and title
        }
    });



    const myProducts = (selectedSexValue === '') && (selectedTypeValue === 'all_category') && (searchText === '') ? state.products : filteredProducts;

    console.log(myProducts);
    return (
        <div className='p-5 grid lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {myProducts.map((product) => {
                return (
                    <div key={product.id}>
                        <ProductCard product={product} />
                    </div>
                )
            })}
        </div>
    )
}
