import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favourited_items: [],
    unique_favourited_items:[]
}

const FavouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addFavourite: (state, action) => {
            state.favourited_items.push(action.payload);
        },
        removeFavourite: (state, action) => {
            state.favourited_items = state.favourited_items.filter(item => item.id!== action.payload);
        },
        unique_favourited_items: (state) => {
            state.unique_favourited_items = state.favourited_items.filter((item, index) => {
                return state.favourited_items.indexOf(item) === index;
            })
        }
    }
})

export default FavouritesSlice.reducer;
export const {addFavourite, removeFavourite, unique_favourited_items} = FavouritesSlice.actions;