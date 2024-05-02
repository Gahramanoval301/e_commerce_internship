import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Category from '../Category'

export default function PageContainer({ children }) {
    return (
        <>
            <Header />
            <main className='relative top-[110px] grid grid-cols-12'>
                <div className='col-span-2 border-2 border-red-500'>
                    <Category />
                </div>
                <div className='border-2 border-green-500 col-span-10'>
                    {children}
                </div>
            </main>
            <Footer />
        </>

    )
}
