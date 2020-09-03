import {configureStore, combineReducers} from '@reduxjs/toolkit';
import shoesProductSliceReducer from './shoeSlice';
import rightDrawerSlice from './rightDrawerSlice';
import cartListSlice from './cartListSlice';

const rootReducer = combineReducers({
    shoes: shoesProductSliceReducer,
    rightDrawer: rightDrawerSlice,
    cartList: cartListSlice,
})

export type RootReducerType = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: rootReducer
})