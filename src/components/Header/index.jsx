import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateSearchedText } from '../../slices/OptionCategorySlice';
import { Link } from 'react-router-dom';
import { TfiMenuAlt } from "react-icons/tfi";
import Category from '../Category';
import SexCategory from '../Category/sex_category';
import TypeCategory from '../Category/type_category';
import UseCategory from '../Category/use_category';
import PriceCategory from '../Category/price_category';

export default function Header() {
    const [searchedValue, setSearchedValue] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setSearchedValue(event.target.value)

        dispatch(updateSearchedText(event.target.value));
    }

    const handleClick = () => {
        setIsClicked((prev) => !prev);
    }

    return (
        <header className='w-full fixed bg-secondary-light shadow-md z-50 '>
            <div className='flex justify-between items-center p-8 relative'>
                <a href='/' className='hidden sm:block font-bold text-2xl sm:text-3xl md:tracking-wide drop-shadow-lg'>Leman <span className='text-primary-dark'>Shoes</span></a>
                <div className='w-4/5 md:w-2/5 lg:w-3/5 border-2 p-2 border-primary-dark'>
                    <input className='w-10/12 sm:w-9/12 md:w-10/12 lg:w-11/12 outline-none bg-transparent lg:tracking-wide text-sm' type="text"
                        placeholder='Enter your product name...'
                        value={searchedValue}
                        onChange={handleChange}
                    />
                    <button type='submit' className='ml-5'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <>
                    <div className='sm:hidden dropdown-menu-box' >
                        <button onClick={handleClick} >
                            <TfiMenuAlt className='text-xl cursor-pointer' />
                        </button>

                        <div className={`dropdown-menu ${isClicked ? 'open' : ''}`}>
                            <div className='flex px-5 justify-between items-center'>
                                <a href='/' className='font-bold text-3xl tracking-wide drop-shadow-lg'>Leman <span className='text-primary-dark'>Shoes</span></a>
                                <div className='flex gap-2 md:gap-5 justify-start items-center relative z-50 '>
                                    <Link className='icon-text text-xl md:text-2xl hover:text-red-500 transition duration-300 hover:scale-105'>
                                        <i className="fa-regular fa-heart "></i>
                                        <div className='text-box-mob'>Go to favourites</div>

                                    </Link>
                                    <Link className='icon-text text-xl md:text-2xl hover:text-primary-dark transition duration-300 hover:scale-105' to='/cart'>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                        <div className='text-box-mob '>Go to cart</div>

                                    </Link>
                                </div>
                            </div>
                            <div className='dropdown-content '>
                                <Category />
                            </div>
                        </div>
                    </div>

                </>
                <div className='hidden sm:flex gap-2 md:gap-5 justify-start items-center sm:ml-5 md:ml-0 md:mr-5'>
                    <Link className='icon-text text-xl md:text-2xl hover:text-red-500 transition duration-300 hover:scale-105'>
                        <i className="fa-regular fa-heart "></i>
                        <div className='text-box absolute'>G o to favourites</div>
                    </Link>
                    <Link className='icon-text text-xl md:text-2xl  hover:text-primary-dark transition duration-300 hover:scale-105' to='/cart'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <div className='text-box'>Go to cart</div>
                    </Link>
                </div>
            </div >
        </header >
    )
}
