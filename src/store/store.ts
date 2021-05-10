import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Image } from '../models/Image';
import reducers from './reducers';

export type AppState = {
    isLoaderVisible: boolean,
    currentError: string,
    allImages: Image[]
};

const initialState: AppState = {
    isLoaderVisible: false,
    currentError: null as any,
    allImages: []
};

const storeSlice = createSlice({
    name: 'storeSlice',
    initialState: initialState,
    reducers: reducers
});

const store = configureStore({
    reducer: storeSlice.reducer
});


export const actions = storeSlice.actions;

export default store;