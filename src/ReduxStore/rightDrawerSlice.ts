import {createSlice} from '@reduxjs/toolkit';
import {RootReducerType} from './Store';

export const rightDrawerSlice = createSlice({
    name: 'rightDrawer',
    initialState: {
        isOpen: false,
    },
    reducers: {
        openDrawer: state=> {
            state.isOpen = true
        },
        closeDrawer: state=> {
            state.isOpen = false
        },
    }
});

export const {openDrawer, closeDrawer } = rightDrawerSlice.actions;
export const isRightDrawerOpen = (state:RootReducerType)=> state.rightDrawer.isOpen

export default rightDrawerSlice.reducer;