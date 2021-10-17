import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: { value: 1 },
    reducers: {
        addToCart: (state, action) => {
            state.value = state.value + 1
            console.log(state.value)

        },
        incrementQuantity: (state, action) => {

        },
        decrementQuantity: (state, action) => {

        },
        removeFromCart: (state, action) => {

        },
    },
});

export const cartReducer = cartSlice.reducer;

export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
} = cartSlice.actions;
