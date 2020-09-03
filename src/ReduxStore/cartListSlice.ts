import { createSlice } from '@reduxjs/toolkit';
import { RootReducerType } from './Store';
import { ShoeType } from '../Types/Types';
import { findObjectInArray } from '../Utilities/Utilities';

let state: { prodList:ShoeType[]  } = { prodList: [] }

export const cartListSlice = createSlice({
    name: 'rightDrawer',
    initialState: state,
    reducers: {
        addToCart: (state, action) => {
            const prodToCart = { ...action.payload, quanity: 1 }
            const index = findObjectInArray(state.prodList, prodToCart.id, 'id', )
            if ( index !== undefined ){
                state.prodList[index].quanity += 1
            }else{
                state.prodList.push(prodToCart)
            }
        },
        removeFromCart: (state, action) => {
            state.prodList = state.prodList.filter((prod:ShoeType) => Number(action.payload) !== prod.id)
        },
    }
});

export const { addToCart, removeFromCart } = cartListSlice.actions;
export const cartProductList = (state: RootReducerType) => state.cartList.prodList

export default cartListSlice.reducer;