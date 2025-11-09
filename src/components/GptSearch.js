import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import { BG_IMG_URL } from "../utils/constants";

const GptSearch = () => {
    return (
        <div>
            <div className='fixed -z-10'>
                <img
                src={BG_IMG_URL}
                alt="bg"
                />
            </div>
            <GptSearchBar />
            <GptMoviesSuggestions />
        </div>
    )
};

export default GptSearch;