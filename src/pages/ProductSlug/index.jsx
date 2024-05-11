import React, { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router';
import { initialState, reducer, types } from '../../reducer';
import axios from 'axios';
import Header from '../../components/Header';

export default function ProductSlug() {
    const url = 'https://65217450a4199548356d3a5c.mockapi.io/api/v1/products';
    const { slug } = useParams();
    const [state, dispatch] = useReducer(reducer, initialState);
    const [imageUrl, setImageUrl] = useState('')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(url).then((response) => {
            dispatch({
                type: types.GET_PRODUCTS,
                payload: response.data[0].products
            });
            setLoading(false); // Update loading state after data is fetched
        });
    }, []);

    const filteredProduct = !loading && state.products.find(product => product.slug === slug);

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < filteredProduct.star; i++) {
            stars.push(<i key={i} className="fa-solid fa-star text-yellow-500 transition duration-300"></i>);
        }
        return stars;
    }

    const handleClick = (e) => {
        setImageUrl(e.target.src);
    }

    // Filter product only if state has been initialized and not loading
    return (
        <div>
            <Header />
            <div className='relative top-[115px] flex flex-col gap-5 p-5'>
                {!loading && filteredProduct ? (
                    <>
                        <div className='grid grid-cols-3'>
                            <div className='col-span-2'>
                                <div className='relative m-5 border-r-2 border-primary-light px-5'>
                                    <div className=' '>
                                        {imageUrl ? (<img src={imageUrl} alt="" />) :
                                            (
                                                <img src={filteredProduct.images.normal} alt="" />
                                            )
                                        }
                                    </div>
                                    <div className='absolute left-0 top-0 flex flex-col gap-2 max-w-20 z-30'>
                                        <div className='image-frame'>
                                            <img src={filteredProduct.images.normal} alt="" onClick={handleClick} />
                                        </div>
                                        <div className='image-frame'>
                                            <img src={filteredProduct.images?.front} alt="" onClick={handleClick} />
                                        </div>
                                        <div className='image-frame'>
                                            <img src={filteredProduct.images?.back} alt="" onClick={handleClick} />
                                        </div>
                                        <div className='image-frame'>
                                            <img src={filteredProduct.images?.bottom} alt="" onClick={handleClick} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-1 info-box gap-3'>
                                <h2 className='text-3xl capitalize font-bold tracking-widest'>{filteredProduct.title}</h2>
                                <div className='flex gap-7 mb-5'>
                                    <div className='stars'>{renderStars()}</div>
                                    <div className='info-section'>
                                        <span>Price:</span>
                                        <p>{filteredProduct.price}</p>
                                    </div>
                                </div>
                                <div className='info-box'>
                                    <h2 className='products_slug_head'>Product Details</h2>
                                    <div className='info-box'>
                                        <div className='info-section'>
                                            <p>Sex:</p>
                                            <span>{filteredProduct.sex}</span>
                                        </div>
                                        <div className='info-section'>
                                            <p>Color:</p>
                                            <span>{filteredProduct.color}</span>
                                        </div>
                                        <div className='info-section'>
                                            <p>Category:</p>
                                            <span>{filteredProduct.category}</span>
                                        </div>
                                        <div className='info-section'>
                                            <p>Department:</p>
                                            <span>{filteredProduct.use}</span>
                                        </div>
                                        <div className='info-section'>
                                            <p>Material:</p>
                                            <span>{filteredProduct.material}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='info-box'>
                            <h2 className='products_slug_head'>About this item</h2>
                            <div>
                                <p>{filteredProduct.about.first}</p>
                                <p>{filteredProduct.about.second}</p>
                                <p>{filteredProduct.about.third}</p>
                                <p>{filteredProduct.about?.fourth}</p>
                                <p>{filteredProduct.about?.fifth}</p>
                            </div>
                        </div>
                        <div className='info-box'>
                            <h2 className='products_slug_head'>Other Details</h2>
                            <div>
                                <div className='info-section'>
                                    <p>Manufacturer:</p>
                                    <span>{filteredProduct.manufacturer}</span>
                                </div>
                                <div className='info-section'>
                                    <p>Data First Avaliable:</p>
                                    <span>{filteredProduct.dataFirstAvaliable}</span>
                                </div>
                            </div>

                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
