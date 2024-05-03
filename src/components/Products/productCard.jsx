import React from 'react'
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < product.star; i++) {
            stars.push(<i key={i} className="fa-solid fa-star text-yellow-500 transition duration-300"></i>);
        }
        return stars;
    }
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
                        <Link><i className="fa-solid fa-cart-plus hover:text-primary-darkest hover:scale-105"></i></Link>
                    </div>
                </div>
            </div>
        </Link>
    )
}
