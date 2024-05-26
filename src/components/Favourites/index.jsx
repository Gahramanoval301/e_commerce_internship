import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../Header';
import FavouriteCard from './FavouriteCard';
import Loading from '../Loading';
import { Link } from 'react-router-dom';

const Favourites = () => {
  const favourited_items = useSelector((state) => state.favourites.favourited_items)
  const [uniqueStoredFavourites, setUniqueStoredFavourites] = useState([])
  const [storedFavourites, setStoredFavourites] = useState([])
  const [isDeletedFromFavourite, setIsDeletedFromFavourite] = useState(false);
  const searchText = useSelector((state) => state.options.searched_text);
  const selectedSexValue = useSelector((state) => state.options.sex_value);
  const selectedTypeValue = useSelector((state) => state.options.type_value);
  const selectedUseValue = useSelector((state) => state.options.use_value);
  const selectedPriceValue = useSelector((state) => state.options.price_value);
  const selectedColorValue = useSelector((state) => state.options.color_value);
  const [isLoading, setIsLoading] = useState(true);



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
    setIsLoading(false);

  }

  //when stored favorites are updated then again check for duplicates
  useEffect(() => {
    removeDuplicates()
  }, [storedFavourites])

  //reload Page
  const ReloadPage = () => {
    location.reload();
  }
  //return products which specify specific filters
  const filteredProducts = uniqueStoredFavourites.filter(
    ({ sex, category, title, use, color, priceDegree }) => {
      const sexMatch = !selectedSexValue || sex === selectedSexValue;
      const typeMatch =
        selectedTypeValue === "all_category" || category === selectedTypeValue;
      const titleMatch =
        !searchText || title.toLowerCase().includes(searchText.toLowerCase());
      const useMatch =
        selectedUseValue === "all_use" || use === selectedUseValue;
      const colorMatch =
        selectedColorValue === "all_color" || color === selectedColorValue;
      const priceMatch =
        selectedPriceValue === "all_price" ||
        priceDegree === selectedPriceValue;

      if (
        (selectedSexValue === "" || sexMatch) &&
        (selectedTypeValue === "" || typeMatch) &&
        (searchText === "" || titleMatch) &&
        (selectedUseValue === "" || useMatch) &&
        (selectedColorValue === "" || colorMatch) &&
        (selectedPriceValue === "" || priceMatch)
      ) {
        return true;
      } else {
        return false;
      }
    }
  );

  const myProducts =
    selectedSexValue === "" &&
      (selectedTypeValue === "all_category" || selectedTypeValue === "") &&
      searchText === "" &&
      (selectedUseValue === "" || selectedUseValue === "all_use") &&
      (selectedColorValue === "" || selectedColorValue === "all_colors") &&
      (selectedPriceValue === "" || selectedPriceValue === "all_price")
      ? uniqueStoredFavourites
      : filteredProducts;
  
  return (
    <>
      <div className='fixed md:bottom-5 md:right-5 z-50 bg-red-500 p-2 text-blue-200 font-semibold hover:bg-red-600'>
        <Link to='/'>Continue to shopping</Link>
      </div>
      <Header />
      {isLoading ? (<Loading />) :
        (
          <div className='p-5 lg:p-8 translate-y-44 md:translate-y-36 lg:translate-y-28 max-[768px]:pb-20'>
            <div
              className={`state-delete  ${isDeletedFromFavourite ? "active" : ""}`}
              onClick={ReloadPage}
            >Restart Page</div>
            <div className='box-navigate  '>
              <h1 className=''>FAVOURITES</h1>
              <Link to='/' className=''>Back to Home</Link>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5 max-[768px]:mr-20'>
              {
                myProducts.map((item) => {
                  return <FavouriteCard key={item.id} item={item} uniqueFavourites={uniqueStoredFavourites}
                    setIsDeletedFromFavourite={setIsDeletedFromFavourite}
                  />
                })
              }
            </div>
          </div>
        )
      }

    </>
  )
}

export default Favourites