import { configureStore } from '@reduxjs/toolkit';
import searchReducerSlice from './features/searchSlice';
import collectionReducerSlice from './features/collectionSlice';

export const store = configureStore({
    reducer: {
        searchReducer: searchReducerSlice,
        collectionReducer: collectionReducerSlice,
    }
})