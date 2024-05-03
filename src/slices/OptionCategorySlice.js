import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    sex_value: '',
    type_value: '',
    searched_text: ''
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
        }
    }
})

export const { updateSexSelectedValue, updateTypeSelectedValue, updateSearchedText } = OptionCategorySlice.actions;
export default OptionCategorySlice.reducer;