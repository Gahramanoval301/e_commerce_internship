import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: []
}
const CartItemsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
    }
})

export default CartItemsSlice.reducer;