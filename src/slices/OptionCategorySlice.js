import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    sex_value: '',
    type_value: '',
    searched_text: '',
    use_value: '',
    price_value: '',
    color_value: ''
}
const OptionCategorySlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        updateSexSelectedValue: (state, action) => {
            state.sex_value = action.payload;
        },
        updateTypeSelectedValue: (state, action) => {
            state.type_value = action.payload;
        },
        updateSearchedText: (state, action) => {
            state.searched_text = action.payload;
        },
        updateUseSelectedValue: (state, action) => {
            state.use_value = action.payload;
        },
        updatePriceSelectedValue: (state, action) => {
            state.price_value = action.payload;
        },
        updateColorSelectedValue: (state, action) => {
            state.color_value = action.payload;
        }
    }
})

export const { updateSexSelectedValue, updateTypeSelectedValue, updateSearchedText, updateUseSelectedValue, updatePriceSelectedValue, updateColorSelectedValue } = OptionCategorySlice.actions;
export default OptionCategorySlice.reducer;