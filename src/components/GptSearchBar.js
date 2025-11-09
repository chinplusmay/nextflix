import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResult } from "../utils/gptSlice";


const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang)
    const searchText = useRef(null)
    const dispatch = useDispatch();

    const searchMovieTMDB = async (movie) =>{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await data.json();

        return json.results;
    }

    const handleGptSearch = async () => {
        // console.log(searchText.current.value);
        const gptResults = await openai.chat.completions.create({
            model: 'deepseek/deepseek-chat',
            messages: [
                {
                    role: 'system',
                    content: 'You are a Movie Recommendation Expert. Suggest movies based on the user query. Only provide names of 5 movies which should be comma separated, like this: Interstellar, The Matrix, Shawshank Redemption, Avengers, Inception'
                },
                {
                    role: 'user',
                    content: searchText.current.value
                }
            ]
          });

        //console.log(gptResults?.choices?.[0]?.message?.content.split(',')) -> {movie1, mov2, mov3, mov4, mov5}
        const moviesArray = gptResults?.choices?.[0]?.message?.content.split(',') 
        
        const promiseArray =  moviesArray.map((movie) => searchMovieTMDB(movie)) //[promise1, promise2, promise3, promise4, promise5]
        

        const tmdbResults = await Promise.all(promiseArray) //[result1, result2, result3, result4, result5]
        dispatch(addGptMoviesResult({movieResults:tmdbResults, movieNames:moviesArray}))
        console.log(tmdbResults)
    };

    return (
        <div className="pt-[12%] flex justify-center">
            <form className="w-1/2 bg-black/80 grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
                <input 
                    ref={searchText}
                    type="text"
                    className="p-4 m-4 col-span-9 rounded-md"  
                    placeholder={lang[langKey].gptSearchPlaceholder}>

                </input>
                <button
                    className="py-2 px-4 m-4 bg-red-600 text-white rounded-md col-span-3"
                    onClick={handleGptSearch}

                    >{lang[langKey].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar;