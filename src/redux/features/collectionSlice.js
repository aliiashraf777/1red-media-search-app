import { createSelector, createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
} 

const collectionReducerSlice = createSlice({
    name: 'collectionSlice',
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExists = state.items.find(
                item => item.id === action.payload
            )

            if (!alreadyExists) {
                state.items.push(action.payload);
                localStorage.setItem('collection', JSON.stringify(state.items));

                console.log('collection added')
            }
        },
        removeCollection: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            )

            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        clearCollection: (state, action) => {
            state.items = []
            localStorage.removeItem('collection');
            console.log('cleared collection')
        },
        addedToast: () => {
            toast.success('Added to Collection ✅', {
                // position: "top-right",
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        },
        removedToast: () => {
            toast.info('Removed from Collection ❕', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        }
    }
})


export const collectionReducerActions = collectionReducerSlice.actions

export default collectionReducerSlice.reducer


// base selector
const selectCollectionState = (state) => state.collectionReducer;

// memoized selector
export const selectCollectionItems = createSelector(
    [selectCollectionState],
    (collection) => collection.items
)