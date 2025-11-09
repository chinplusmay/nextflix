import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useSelector } from "react-redux";

const useTopRatedMovies = () => {
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);
    const dispatch = useDispatch();

     const getTopRatedMovies = async () => {
        try{
            const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
            const json = await data.json();
            dispatch(addTopRatedMovies(json.results))
        } catch(err){
            console.log(err);
        }
     }

     useEffect(() =>{
        !topRatedMovies && getTopRatedMovies();
     }, [])
};

export default useTopRatedMovies;