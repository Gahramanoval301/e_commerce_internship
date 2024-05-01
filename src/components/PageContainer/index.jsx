import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default function PageContainer({ children }) {
    return (
        <>
            <Header />
            <main className='relative top-[110px]'>
                {children}
            </main>
            <Footer />
        </>

    )
}
