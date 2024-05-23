// movieSlice.js
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideos: null,
        popularMovies: null,
        upcomingMovies: null,
        topRated: null,
    },
    reducers: {

        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTopRated: (state, action) => {
            state.topRated = action.payload;
        },

        addTrailerVideos: (state, action) => {
            state.trailerVideos = action.payload;
        }
    }
})

export const
    { addNowPlayingMovies,
        addTrailerVideos,
        addPopularMovies,
        addUpComingMovies,
        addTopRated } = moviesSlice.actions;

export default moviesSlice.reducer;
