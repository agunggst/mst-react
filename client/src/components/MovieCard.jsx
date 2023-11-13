import { Link } from "react-router-dom"
import rupiahFormatter from "../helper/rupiahFormatter"

const MovieCard = ({ movie, movieDetailPath }) => {
  return (
    <Link className="px-6 py-3 flex items-center border-2 border-zinc-500 mb-3 rounded-xl mx-2 cursor-pointer" to={movieDetailPath}>
      <img src={movie.Poster} alt="movieApp" className="h-36 w-32 object-contain border-r-4 border-amber-300 pr-4" />
      <div className="pl-4">
        <h2 className="text-xl font-semibold text-amber-500 mb-4">{movie.Title}</h2>
        <h2 className="text-base font-medium bg-zinc-500 w-fit px-2 rounded-xl mb-2">{movie.Year}</h2>
        {/* <h2 className="text-base font-medium text-amber-500 w-fit ">{rupiahFormatter(movie.Price)}</h2> */}
      </div>
    </Link>
  )
}
 
export default MovieCard