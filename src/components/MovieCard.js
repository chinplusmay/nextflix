import {MOVIE_POSTER_CDN} from "../utils/constants"

const MovieCard = ({posterPath}) =>{
    if(!posterPath) return null;
    return (
        <div className="w-48 pr-4">
           <img 
              src={MOVIE_POSTER_CDN + posterPath} 
              alt="poster image" 
              className="w-full h-72 object-cover rounded-lg"
           />
        </div>
    )
}

export default MovieCard;   