import { useQuery } from "react-query"
import { useDispatch, useSelector } from "react-redux"
import { fetchMovieDetail } from "../api"
import { useParams } from "react-router-dom"
import rupiahFormatter from "../helper/rupiahFormatter"
import { useState } from "react"
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'

const MovieDetail = () => {
  const dispatch = useDispatch()
  const { id: imdbId } = useParams()
  const detailMovie = useSelector(state => state.movieReducer.detailMovie)
  const orders = useSelector(state => state.movieReducer.orders)
  const [count, setCount] = useState(1)

  const { isLoading } = useQuery(
    'detail-movie',
    () => fetchMovieDetail(imdbId, ({ data }) => {
      const detailMovieLocal = JSON.parse(localStorage.getItem('detailMovie'))
      if (detailMovieLocal) {
        dispatch({
          type: 'SET_DETAIL_MOVIE',
          payload: {
            detailMovie: {...detailMovieLocal, ...data}
          }
        })
      } else {
        dispatch({
          type: 'SET_DETAIL_MOVIE',
          payload: {
            detailMovie: {...data}
          }
        })
      }
    })
  )
  const addToCart = () => {
    dispatch({
      type: 'SET_ORDERS',
      payload: {
        orders: [...orders, {...detailMovie, Count: count}]
      }
    })
  }

  if (isLoading) {
    return <div className="">Loading...</div>
  }

  return (
    <div className="movie-detail container mx-auto py-8 max-w-screen-md flex">
      <img src={detailMovie.Poster} alt="moveApp" className="w-72 object-contain mr-16"/>
      <div className="">
        <h2 className="text-amber-500 text-4xl font-bold mb-8">{detailMovie.Title}</h2>
        <div className="text-white flex font-medium justify-between mb-4">
          <h2 className="mr-3">Year: {detailMovie.Year}</h2>
          <h2 className="mr-3 bg-amber-500 px-2 rounded-md">Ratings: {detailMovie.Rated}</h2>
          <h2 className="">Released: {detailMovie.Released}</h2>
        </div>
        <h2 className="text-white font-normal mb-4 bg-neutral-800 w-fit px-4 py-2 rounded-md"><span className="font-medium">Genre:</span> {detailMovie.Genre}</h2>
        <h2 className="text-white font-normal mb-4"><span className="font-medium">Writer:</span> {detailMovie.Writer}</h2>
        <h2 className="text-white font-normal mb-4"><span className="font-medium">Actors:</span> {detailMovie.Actors}</h2>
        <h2 className="text-white font-normal mb-8"><span className="font-medium">Plot:</span> {detailMovie.Plot}</h2>
        <h2 className="text-amber-500 font-normal text-xl mb-10"><span className="font-medium">Price:</span> {rupiahFormatter(detailMovie.Price)}</h2>
        <div className="flex items-center">
          <MinusIcon className="h-6 w-6 text-white bg-amber-500 font-semibold cursor-pointer" onClick={() => setCount(count-1)} />
          <h2 className="text-white font-semibold mx-3 w-4 text-center">{count}</h2>
          <PlusIcon className="h-6 w-6 text-white bg-amber-500 font-semibold cursor-pointer" onClick={() => setCount(count+1)} />
          <h2 className="font-semibold text-white ml-6 bg-amber-500 px-4 py-1 rounded-md cursor-pointer" onClick={addToCart}>Add to Cart</h2>
        </div>
      </div>
    </div>
  )
}
 
export default MovieDetail