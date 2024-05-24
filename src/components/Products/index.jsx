import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import ProductCard from "./productCard";
import { initialState, reducer, types } from "../../reducer";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../../slices/CartItemsSlice";
import { MdOutlineRestartAlt } from "react-icons/md";

const url = "https://65217450a4199548356d3a5c.mockapi.io/api/v1/products";

export default function Products() {
  const selectedSexValue = useSelector((state) => state.options.sex_value);
  const selectedTypeValue = useSelector((state) => state.options.type_value);
  const searchText = useSelector((state) => state.options.searched_text);
  const selectedUseValue = useSelector((state) => state.options.use_value);
  const selectedPriceValue = useSelector((state) => state.options.price_value);
  const selectedColorValue = useSelector((state) => state.options.color_value);
  const [loading, setLoading] = useState(true);
  const [IsAddedToFavourite, setIsAddedToFavourite] = useState(false);

  const dispatch_slice = useDispatch();

  useEffect(() => {
    //set local storage for cart items
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]));
    }

    //set local storage for favourites items
    if (!localStorage.getItem("favourites")) {
      localStorage.setItem("favourites", JSON.stringify([]));
    }

    axios.get(url).then((res) => {
      dispatch({ type: types.GET_PRODUCTS, payload: res.data[0].products });
      dispatch_slice(getAllItems(res.data[0].products));
      setLoading(false);
    });
  }, []);
    
    const ReloadPage = () => {
        location.reload();
    }
  const [state, dispatch] = useReducer(reducer, initialState);

    //catch up my values from inputs 
  const filteredProducts = state.products.filter(
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

    //set what is myProducts
  const myProducts =
    selectedSexValue === "" &&
    (selectedTypeValue === "all_category" || selectedTypeValue === "") &&
    searchText === "" &&
    (selectedUseValue === "" || selectedUseValue === "all_use") &&
    (selectedColorValue === "" || selectedColorValue === "all_colors") &&
    (selectedPriceValue === "" || selectedPriceValue === "all_price")
      ? state.products
      : filteredProducts;

  return (
    <div className="max-[769px]:translate-y-24 sm:my-1 p-5 grid place-content-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div
            className={`state-info  ${IsAddedToFavourite ? "active" : ""}`}
            onClick={ReloadPage}
          >
            <i>
              {" "}
              <MdOutlineRestartAlt />
            </i>
            <p>Restart Site</p>
          </div>
          {myProducts.map((product) => {
            return (
              <>
                <div key={product.id}>
                  <ProductCard
                    product={product}
                    setIsAddedToFavourite={setIsAddedToFavourite}
                  />
                </div>
              </>
            );
          })}
        </>
      )}
    </div>
  );
}
