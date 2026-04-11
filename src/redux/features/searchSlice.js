import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: 'cats',
    activeTab: 'photos',
    results: [],
    loading: false,
    error: null 
}

const searchReducerSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        setActiveTab: (state, action) => {
            state.activeTab = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        setResults: (state, action) => {
            state.loading = false;
            state.results = action.payload;
        },
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearResults: (state, action) => {
            state.results = []
        }
    }
})

// all reducer ACTIONS exported in object
export const searchReducerActions = searchReducerSlice.actions
// searchReducerActions.setQuery('')... all other as well


// 1. base selector
const selectSearchState = (state) => state.searchReducer;

// 2. all Memoized selectors
// export const selectQuery = (state) => state.searchReducer.query

export const selectQuery = createSelector(
    [selectSearchState],
    (search) => search.query
)

export const selectActiveTab = createSelector(
    [selectSearchState],
    (search) => search.activeTab
)

export const selectResults = createSelector(
    [selectSearchState],
    (search) => search.results
)

export const selectLoading = createSelector(
    [selectSearchState],
    (search) => search.loading
)

export const selectError = createSelector(
    [selectSearchState],
    (search) => search.error
)

export default searchReducerSlice.reducer;