import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getAllItems } from '../../slices/CartItemsSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BsFillImageFill } from 'react-icons/bs';
import Swal from 'sweetalert2'


export default function FavouriteCard({ item, uniqueFavourites, setIsDeletedFromFavourite }) {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [isFavourite, setIsFavourite] = useState(true)
    const allItems = useSelector((state) => state.cartItems.all_items)


    const url = "https://65217450a4199548356d3a5c.mockapi.io/api/v1/products";
    const dispatch_slice = useDispatch();

    useEffect(() => {
        axios.get(url).then((res) => {
            dispatch_slice(getAllItems(res.data[0].products));
        });
    }, []);

    //render stars based on their amount
    const renderStars = () => {
        let stars = [];
        for (let i = 0; i < item.star; i++) {
            stars.push(<i key={i} className="fa-solid fa-star text-yellow-500 transition duration-300"></i>);
        }
        return stars
    }

    //handle image loaded
    const handleImageLoad = () => {
        setImageLoaded(true)
    }
    
    //remove favourite 
    const removeFavourite = (id) => {
        setIsDeletedFromFavourite(true)
        Swal.fire({
            title: "Are you sure want to remove this item from your favorites ?",
            showCancelButton: true,
            confirmButtonText: "Yes",
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const indexToRemove = uniqueFavourites.findIndex(favourite => favourite.id === id);
                    // If item with itemId exists, remove it from the array
                    if (indexToRemove !== -1) {
                        const newFavouriteItems = [...uniqueFavourites.slice(0, indexToRemove), ...uniqueFavourites.slice(indexToRemove + 1)];
                        localStorage.setItem('favourites', JSON.stringify(newFavouriteItems));
                    }

                    setIsFavourite(false)
                    console.log(isFavourite);
                Swal.fire({
                    timer: 1000,
                    text: 'This item is removed from your favorites list',
                    position: 'top-end',
                    toast:'true'
                });
            } 
        });


    }
    //adding item to cart


    const addToCart = (itemId) => {
        const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        //define addItem 
        const addedItem = allItems.find(({ id }) => id === itemId);
        dispatch_slice(addItem(addedItem));
        //define counts
        const counts = {};
        existingCartItems.forEach((item) => {
            counts[item.id] = (counts[item.id] || 0) + 1;
        });

        //local storage
        const updatedCartItems = [...existingCartItems, addedItem];
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));

        //fire swal-toast
        Swal.fire({
            timer: 1000,
            text: 'Item is added to cart successfully',
            position: 'top-end',
            toast: 'true'
        });
    };
    //let's navigate to the product slug
    const navigate = useNavigate()

    const NavigateToProductSlug = () => {
        navigate(`/product/${item.slug}`);
    }

    return (
        <>
            <div className='product_card_favourite cursor-pointer ' onClick={NavigateToProductSlug} >
                <div className='product_normal_image'>
                    <img className='w-full h-full' src={item.images.normal} alt={item.title} onLoad={handleImageLoad} style={{ display: imageLoaded ? 'block' : 'none' }} />
                    <div
                        className="w-full h-full skeleton-card relative"
                        style={{ display: imageLoaded ? "none" : "block" }}
                    >
                        <i>
                            <BsFillImageFill className="absolute left-[49%] top-[49%] scale-[2] scale-x-[2.5] text-white" />
                        </i>
                    </div>                </div>
                <h3 className='capitalize line-clamp-1 text-lg font-semibold'>{item.title}</h3>
                <div className='stars'>{renderStars()}</div>
                <div className='price_icons'>
                    <p>{item.price}</p>
                    <div className='icons_box'>
                        <button onClick={(e) => { e.stopPropagation(); removeFavourite(item.id) }} className='relative button-favourite'>
                            <i className={`fa-solid fa-heart hover:rotate-45 text-red-600`}></i>
                            <div className="">
                                <p className="flex justify-center items-center gap-1 ">
                                    <span> Add to</span>
                                    <i><FaHeart className="mt-[3px]" /></i>
                                </p>
                            </div>
                        </button>
                        <button className='relative button-cart'
                            onClick={(e) => {
                                e.stopPropagation();
                                addToCart(item.id, e);
                            }}>
                            <div className="hidden absolute bottom-6 text-[9px] w-14">
                                <p className="flex justify-center items-center gap-1 ">
                                    <span> Add to</span>
                                    <i><FaCartShopping className="mt-[3px]" /></i>
                                </p>
                            </div>
                            <i className="fa-solid fa-cart-plus hover:text-primary-darkest hover:scale-105"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
