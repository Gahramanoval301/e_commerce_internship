import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../Header';
import FavouriteCard from './FavouriteCard';

const Favourites = () => {
  const favourited_items = useSelector((state) => state.favourites.favourited_items)
  const [uniqueStoredFavourites, setUniqueStoredFavourites] = useState([])
  const [storedFavourites, setStoredFavourites] = useState([])

  console.log(favourited_items);

  useEffect(() => {
    //fetch stored items from local storage
    const storedFavouritesLocal = JSON.parse(localStorage.getItem('favourites')) || [];
    setStoredFavourites(storedFavouritesLocal)
  }, [])


  // Function to remove duplicates from card_items
  const removeDuplicates = () => {
    const uniqueStoredFavouritesMap = new Map();
    storedFavourites.forEach(storedFavourite => {
      uniqueStoredFavouritesMap.set(storedFavourite.id, storedFavourite);
    });
    setUniqueStoredFavourites([...uniqueStoredFavouritesMap.values()]);
  }

  //when stored favorites are updated then again check for duplicates
  useEffect(() => {
    removeDuplicates()
  }, [storedFavourites])



  return (
    <>
      <Header />
      <div className='p-8 translate-y-28'>
        <h1 className='tracking-widest font-bold text-2xl'>FAVOURITES</h1>
        <div className='grid grid-cols-4 gap-3 mt-5'>
          {
            uniqueStoredFavourites.map((item) => {
              return <FavouriteCard key={item.id} item={item} uniqueFavourites={uniqueStoredFavourites} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default Favourites