import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
        movieTrailer: null,
    },
    reducers: {
        addNowPlayingMovies: (state, actions) =>{
            state.nowPlayingMovies = actions.payload;
        },
        addMovieTrailer: (state, actions) =>{
            state.movieTrailer = actions.payload;
        }
    }
})

export default movieSlice.reducer;
export const{addNowPlayingMovies, addMovieTrailer} = movieSlice.actions;