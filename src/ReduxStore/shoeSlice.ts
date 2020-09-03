import {createSlice} from '@reduxjs/toolkit';
import {ShoeProductSliceType} from '../Types/Types';
import {RootReducerType} from './Store';

const state:ShoeProductSliceType  = { }

export const shoesProductSlice = createSlice({
    name: 'shoes',
    initialState: state,
    reducers: {
        setNewCollection: (state, action)=> {
            state.newCollections = action.payload
        },
        setBestSelling: (state, action)=> {
            state.bestSelling = action.payload
        },
        setAllProducts: (state, action)=> {
            state.allProducts = action.payload
        },
    }
});

export const {setNewCollection, setBestSelling, setAllProducts} = shoesProductSlice.actions;
export const getNewCollection = (state:RootReducerType)=> state.shoes.newCollections
export const getBestSelling = (state:RootReducerType)=> state.shoes.bestSelling
export const getAllProducts = (state:RootReducerType)=> state.shoes.allProducts

export default shoesProductSlice.reducer;