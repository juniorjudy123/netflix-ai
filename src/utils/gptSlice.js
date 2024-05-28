import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,//boolean value added so that we can toggle it 
    },
    reducers: {
        toggeGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        }
    }
})

export default gptSlice.reducer;
export const { toggeGptSearchView } = gptSlice.actions
