import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        movieTrailer: null,
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, actions) =>{
            state.nowPlayingMovies = actions.payload;
        },
        addMovieTrailer: (state, actions) =>{
            state.movieTrailer = actions.payload;
        },  
        addPopularMovies: (state, actions) =>{
            state.popularMovies = actions.payload;
        },
        addTopRatedMovies: (state, actions) =>{
            state.topRatedMovies = actions.payload;
        },
        addUpcomingMovies: (state, actions) =>{
            state.upcomingMovies = actions.payload;
        },
    }
})

export default movieSlice.reducer;
export const{addNowPlayingMovies, addMovieTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies} = movieSlice.actions;