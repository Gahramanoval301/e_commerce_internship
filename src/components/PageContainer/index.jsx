import Header from '../Header'
import Footer from '../Footer'
import Category from '../Category'

export default function PageContainer({ children }) {

    return (
        <>
            <Header />
            <main className='relative top-[110px] grid grid-cols-12'>
                {
                    <div className='hidden md:block col-span-3 lg:col-span-2 border-r-[1px] border-primary-dark'>
                        <Category />
                    </div>
                }
                <div className='col-span-9 lg:col-span-10'>
                    {children}
                </div>
            </main>
            <Footer />
        </>

    )
}
