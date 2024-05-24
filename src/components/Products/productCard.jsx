import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { initialState, reducer, types } from "../../reducer";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../slices/CartItemsSlice";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import {
    addFavourite,
    unique_favourited_items,
} from "../../slices/FavouriteSlice";
import { BsFillImageFill } from "react-icons/bs";
import Swal from "sweetalert2";

export default function ProductCard({ product, setIsAddedToFavourite }) {
    const url = "https://65217450a4199548356d3a5c.mockapi.io/api/v1/products";
    const dispatch_slice = useDispatch();
    const card_items = useSelector((state) => state.cartItems.items);
    const navigate = useNavigate();

    // const [uniqueFavourites, setUniqueFavourites] = useState([])
    const [storedFavourites, setStoredFavourites] = useState([]);
    const [isFavourite, setIsFavourite] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    //render stars based on their amount
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < product.star; i++) {
            stars.push(
                <i
                    key={i}
                    className="fa-solid fa-star text-yellow-500 transition duration-300"
                ></i>
            );
        }
        return stars;
    };

    //get products from rest api
    useEffect(() => {
        axios.get(url).then(({ data }) => {
            dispatch({ type: types.GET_PRODUCTS, payload: data[0].products });
        });
        const storedFavouritesLocal = JSON.parse(
            localStorage.getItem("favourites")
        );
        setStoredFavourites(storedFavouritesLocal);
    }, []);

    const [state, dispatch] = useReducer(reducer, initialState);

    //adding item to cart
    const addToCart = (itemId) => {
        const addedItem = state.products.find(({ id }) => id === itemId);
        dispatch_slice(addItem(addedItem));
        const counts = {};
        card_items.forEach((item) => {
            counts[item.id] = (counts[item.id] || 0) + 1;
        });
        console.log(addedItem);
        //local storage
        const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCartItems = [...existingCartItems, addedItem];
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));

        //fire swal toast
        Swal.fire({
            timer: 1300,
            text: 'Item is added to cart successfully',
            position: 'top-end',
            toast: 'true'
        });
    };

    //adding item to favourites
    const addFavourites = (itemId) => {
        const addedItem = state.products.find(({ id }) => id === itemId);
        dispatch_slice(addFavourite(addedItem));

        //localStorage
        const existingFavourites = JSON.parse(localStorage.getItem("favourites"));
        const updatedFavourites = [...existingFavourites, addedItem];
        localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
        setIsAddedToFavourite(true);
    };

    //navigate to product slug/page
    const navigateToProductSlug = () => {
        navigate(`/product/${product.slug}`);
    };

    //handle image is already loaded
    const handleImageLoad = () => {
        setImageLoaded(true);
    };
    //check if your products is exists inside of favourite products then change state.
    useEffect(() => {
        console.log(storedFavourites);
        const result = storedFavourites.find((item) => item.id === product.id);
        console.log(Boolean(result));
        setIsFavourite(Boolean(result));
    }, [storedFavourites]);
    return (
        <div
            className="product_card cursor-pointer "
            onClick={navigateToProductSlug}
        >
            <div className="product_normal_image">
                <img
                    className="w-full h-full"
                    src={product.images.normal}
                    alt={product.title}
                    onLoad={handleImageLoad}
                    style={{ display: imageLoaded ? "block" : "none" }}
                />
                <div
                    className="w-full h-full skeleton-card relative"
                    style={{ display: imageLoaded ? "none" : "block" }}
                >
                    <i>
                        <BsFillImageFill className="absolute left-[49%] top-[49%] scale-[2] scale-x-[2.5] text-white" />
                    </i>
                </div>
            </div>
            <h3 className="capitalize line-clamp-1 text-lg">{product.title}</h3>
            <div className="stars">{renderStars()}</div>
            <div className="price_icons">
                <p>{product.price}</p>
                <div className="icons_box">
                    <button
                        className="relative button-favourite"
                        onClick={(e) => {
                            e.stopPropagation();
                            addFavourites(product.id);
                        }}
                    >
                        <div className="">
                            <p className="flex justify-center items-center gap-1 ">
                                <span> Add to</span>  
                            <i><FaHeart className="mt-[3px]" /></i>
                            </p>
                        </div>
                        <i
                            className={`fa-solid fa-heart hover:rotate-45 ${isFavourite ? "text-red-600" : ""
                                }`}
                        ></i>
                    </button>
                    <button
                        className="relative button-cart"
                        onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product.id, e);
                        }}
                    >
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
    );
}
