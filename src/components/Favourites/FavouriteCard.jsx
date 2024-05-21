import React, { useState } from 'react'

export default function FavouriteCard({ item, uniqueFavourites }) {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [isFavourite, setIsFavourite] = useState(true)

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
        const result = confirm('Are you sure you want to remove from your favorites this item?')
        if (result) {
            const indexToRemove = uniqueFavourites.findIndex(favourite => favourite.id === id);
            // If item with itemId exists, remove it from the array
            if (indexToRemove !== -1) {
                const newFavouriteItems = [...uniqueFavourites.slice(0, indexToRemove), ...uniqueFavourites.slice(indexToRemove + 1)];
                localStorage.setItem('favourites', JSON.stringify(newFavouriteItems));
            }

            setIsFavourite(false)
            console.log(isFavourite);
        }
    }
    return (
        <>
        <div className='product_card cursor-pointer ' >
            <div className='product_normal_image'>
                <img className='w-full h-full' src={item.images.normal} alt={item.title} onLoad={handleImageLoad} style={{ display: imageLoaded ? 'block' : 'none' }} />
                <div className='w-full h-full border-2 border-red-600 bg-red-400 animate-pulse' style={{ display: imageLoaded ? 'none' : 'block' }} />
            </div>
            <h3 className='capitalize line-clamp-1 text-lg font-semibold'>{item.title}</h3>
            <div className='stars'>{renderStars()}</div>
            <div className='price_icons'>
                <p>{item.price}</p>
                <div className='icons_box'>
                    <button onClick={() => removeFavourite(item.id)}>
                        <i className={`fa-solid fa-heart hover:rotate-45 text-red-600`}></i>
                    </button>
                    <button><i className="fa-solid fa-cart-plus hover:text-primary-darkest hover:scale-105"></i></button>
                </div>
            </div>
        </div>
        </>
    )
}
