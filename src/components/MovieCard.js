import {MOVIE_POSTER_CDN} from "../utils/constants"

const MovieCard = ({posterPath}) =>{
    return (
        <div className="w-48 pr-4">
           <img src={MOVIE_POSTER_CDN + (posterPath || "1E5baAaEse26fej7uHcjOgEE2t2.jpg")} alt="poster image" />
        </div>
    )
}

export default MovieCard;