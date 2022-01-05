import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products: [],
        quantity: 0,
        totalPrice: 0
    },
    reducers: {
        // Add a single product to cart
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload.product);
            state.total += action.payload.price;
        }
    }
})

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;