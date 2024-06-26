import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    all_items: [],
    items: [],
    item_counts: {}
}
const CartItemsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        getAllItems: (state, action) => {
            state.all_items = action.payload;
        },
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        setCounts: (state, action) => {
            state.item_counts = action.payload;
        },
        increaseCounts: (state, action) => { 
            state.item_counts[action.payload] += 1;
        },
        decreaseCounts: (state, action) => {
            state.item_counts[action.payload] -= 1;
        }

    }
})
export const { addItem, setCounts, getAllItems, increaseCounts, decreaseCounts } = CartItemsSlice.actions
export default CartItemsSlice.reducer;