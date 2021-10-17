import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './carrinho.slice';

const reducer = {
  cart: cartReducer,
};

const store = configureStore({
  reducer,
});

export default store;
