import { Link } from "react-router-dom"
import rupiahFormatter from "../helper/rupiahFormatter"
import { useDispatch } from "react-redux"
import getRandomInt from "../helper/getRandomInt"
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'

const MovieCard = ({ movie, movieDetailPath }) => {
  const dispatch = useDispatch()

  const saveMovieDataState = () => {
    localStorage.setItem('detailMovie', JSON.stringify(movie))
    dispatch({
      type: 'SET_DETAIL_MOVIE',
      payload: {
        detailMovie: movie
      }
    })
  }
  const addOrder = (imdbId) => {
    dispatch({
      type: 'ADD_ORDER',
      payload: {
        imdbId
      }
    })
  }
  const deleteOrder = () => {
    dispatch({
      type: 'DELETE_ORDER',
      payload: {
        imdbId: movie.imdbID
      }
    })
  }
  const removeOrder = (imdbId, count) => {
    if (count !== 1) {
      dispatch({
        type: 'REMOVE_ORDER',
        payload: {
          imdbId
        }
      })
    } 
  }

  return (
    <Link className="px-6 py-3 flex items-center border-2 border-zinc-500 mb-3 rounded-xl mx-2 cursor-pointer" to={movieDetailPath} onClick={saveMovieDataState}>
      <img src={movie.Poster} alt="movieApp" className="h-36 w-32 object-contain border-r-4 border-amber-300 pr-4" />
      <div className="pl-4">
        <h2 className="text-xl font-semibold text-amber-500 mb-4">{movie.Title}</h2>
        <h2 className="text-base font-medium bg-zinc-500 w-fit px-2 rounded-xl mb-2">{movie.Year}</h2>
        <h2 className="text-base font-medium text-amber-500 w-fit ">{rupiahFormatter(movie.Price || getRandomInt(100000, 1000000))}</h2>
        {movie.Count && <div className="flex items-center mt-4">
          <MinusIcon className="h-6 w-6 text-white bg-amber-500 font-semibold cursor-pointer" onClick={() => removeOrder(movie.imdbID, movie.Count)} />
          <h2 className="text-white font-semibold mx-3 w-4 text-center">{movie.Count}</h2>
          <PlusIcon className="h-6 w-6 text-white bg-amber-500 font-semibold cursor-pointer" onClick={() => addOrder(movie.imdbID)} />
          <h2 className="font-semibold text-white ml-6 bg-amber-500 px-4 py-1 rounded-md cursor-pointer" onClick={deleteOrder}>Delete</h2>
        </div>}
      </div>
    </Link>
  )
}
 
export default MovieCard