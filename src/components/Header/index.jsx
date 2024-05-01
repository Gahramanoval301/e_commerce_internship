import React from 'react'

export default function Header() {
    return (
        <header className='w-full fixed bg-secondary-light shadow-md z-50'>
            <div className='flex justify-between items-center p-8'>
                <h1 className='font-bold text-3xl tracking-wide drop-shadow-lg'>Leman <span className='text-primary-dark'>Shoes</span></h1>
                <div className='w-3/5 border-2 p-2 border-primary-dark'>
                    <input className='w-11/12 outline-none bg-transparent tracking-wide' type="text" placeholder='Enter your product name...' />
                    <button type='submit' className='ml-5'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div className='flex gap-5 justify-start items-center mr-5'>
                    <a className='text-2xl' href=""><i className="fa-regular fa-heart"></i></a>
                    <a className='text-2xl' href="">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </a>
                </div>
            </div>
        </header>
    )
}
