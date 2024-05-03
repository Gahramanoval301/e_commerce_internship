export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}
export const initialState = {
    products: []
}
export const types = {
    GET_PRODUCTS: 'GET_PRODUCTS'
}