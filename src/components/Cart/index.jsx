import React, { useEffect, useMemo, useState } from 'react'
import SingleCardItem from './SingleCardItem';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setCounts } from '../../slices/CartItemsSlice';
import Header from '../Header';
import { Link } from 'react-router-dom';

export function Cart() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [cartItems, setCartItems] = useState([])

    const card_items = useSelector((state) => state.cartItems.items)
    const all_items = useSelector((state) => state.cartItems.all_items)
    const countsSlice = useSelector((state) => state.cartItems.item_counts)

    // define filter cases 
    const searchText = useSelector((state) => state.options.searched_text);
    const selectedSexValue = useSelector((state) => state.options.sex_value);
    const selectedTypeValue = useSelector((state) => state.options.type_value);
    const selectedUseValue = useSelector((state) => state.options.use_value);
    const selectedPriceValue = useSelector((state) => state.options.price_value);
    const selectedColorValue = useSelector((state) => state.options.color_value);


    //navigate to home page automatically
    const continueToShop = () => {
        navigate('/')
    }

    // Fetch cart items from local storage when component mounts
    const getCartItemsFromLocalStorage = () => {
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCartItems);
    };
    useEffect(() => {
        getCartItemsFromLocalStorage();
    }, []);

    // Function to remove duplicates from card_items
    const [uniqueItems, setUniqueItems] = useState([]);

    const removeDuplicates = () => {
        const uniqueItemsMap = new Map();
        cartItems.forEach(cardItem => {
            uniqueItemsMap.set(cardItem.id, cardItem);
        });
        setUniqueItems([...uniqueItemsMap.values()]);
    };


    // create counts object with useMemo to remove some unuseful renders
    const counts = useMemo(() => {
        const countsObj = {};
        cartItems.forEach(item => {
            countsObj[item.id] = (countsObj[item.id] || 0) + 1;
        });
        return countsObj;
    }, [cartItems]);

    // Call removeDuplicates when card_items changes
    useEffect(() => {
        removeDuplicates();
        dispatch(setCounts(counts));
    }, [cartItems, dispatch, counts]);


    //calculate Total Pirce of products
    const calculateTotalPrice = (counts) => {
        let price = 0;
        for (const key in counts) {
            if (counts.hasOwnProperty(key)) {
                const myItem = uniqueItems.find(item => item.id === parseInt(key));
                if (myItem) {
                    price += (Number(counts[key]) * (Number(myItem.price.slice(1))).toFixed(2));
                }
            }
        }
        return price.toFixed(2);
    }
    const totalPrice = calculateTotalPrice(countsSlice)

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

    const totalSum = sumObjectValues(countsSlice);

    //return products which specify specific filters
    const filteredProducts = uniqueItems.filter(
        ({ sex, category, title, use, color, priceDegree }) => {
            const sexMatch = !selectedSexValue || sex === selectedSexValue;
            const typeMatch =
                selectedTypeValue === "all_category" || category === selectedTypeValue;
            const titleMatch =
                !searchText || title.toLowerCase().includes(searchText.toLowerCase());
            const useMatch =
                selectedUseValue === "all_use" || use === selectedUseValue;
            const colorMatch =
                selectedColorValue === "all_color" || color === selectedColorValue;
            const priceMatch =
                selectedPriceValue === "all_price" ||
                priceDegree === selectedPriceValue;

            if (
                (selectedSexValue === "" || sexMatch) &&
                (selectedTypeValue === "" || typeMatch) &&
                (searchText === "" || titleMatch) &&
                (selectedUseValue === "" || useMatch) &&
                (selectedColorValue === "" || colorMatch) &&
                (selectedPriceValue === "" || priceMatch)
            ) {
                return true;
            } else {
                return false;
            }
        }
    );
    const myProducts =
        selectedSexValue === "" &&
            (selectedTypeValue === "all_category" || selectedTypeValue === "") &&
            searchText === "" &&
            (selectedUseValue === "" || selectedUseValue === "all_use") &&
            (selectedColorValue === "" || selectedColorValue === "all_colors") &&
            (selectedPriceValue === "" || selectedPriceValue === "all_price")
            ? uniqueItems
            : filteredProducts;


    return (
        <>
            <div className='fixed md:bottom-5 md:right-5 z-50 bg-red-500 p-2 text-blue-200 font-semibold hover:bg-red-600'>
                <Link to='/'>Continue to shopping</Link>
            </div>
            <Header />
            <div className='grid lg:grid-cols-10 translate-y-44 md:translate-y-32 lg:translate-y-28 pb-10'>
                <div className='col-span-8 pr-5'>
                    <div className='box-navigate'>
                        <h1 className='m-5 font-bold text-3xl tracking-wider'>Shopping Bag</h1>
                        <a href="/">Back to Home</a>
                    </div>
                    <div className='m-5 mr-1 border-2 border-secondary-dark rounded-lg shadow-xl '>
                        <div className='hidden sm:grid sm:grid-cols-10 place-items-center p-3 bg-primary-light rounded-t-lg shadow-md font-semibold '>
                            <h1 className='col-span-4 '>Product</h1>
                            <h1 className='col-span-2 '>Price</h1>
                            <h1 className='col-span-2 '>Quantity</h1>
                            <h1 className='col-span-2 '>Total Price</h1>
                        </div>
                        <div>
                            {myProducts.map((cartItem, index) => {
                                return <>
                                    <SingleCardItem key={cartItems.id} item={cartItem} counts={countsSlice} card_items={cartItems} />
                                    {index !== uniqueItems.length - 1 && <hr className='border-primary-light' />}
                                </>
                            })}
                        </div>
                    </div>
                </div>
                <div className='text-center max-[1024px]:w-[90vw] max-[600px]:w-[290px] max-[600px]:ml-5 max-[850px]:ml-6 max-[1024px]:ml-10 col-span-2 m-5 flex flex-col justify-end '>
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
        </>

    )
}
export default Cart