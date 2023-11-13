import { useEffect, useState } from "react"
import { fetchMovies } from "../api"
import { useQuery } from "react-query"
import { useDispatch, useSelector } from "react-redux"
import useDebounce from "../hooks/useDebounce"
import MovieCard from "../components/MovieCard"

const LandingPage = () => {
  const dispatch = useDispatch()
  const movies = useSelector(state => state.movieReducer.movies)

  const [inputSearch, setInputSearch] = useState('Batman')
  const search = useDebounce(inputSearch)
  const [page, setPage] = useState(1)
  const perPage = 10

  const { refetch } = useQuery(
    'search-movies',
    () => fetchMovies(search, page, ({ status, data }) => {
      dispatch({
        type: 'SET_MOVIES',
        payload: {
          movies: status === 'success' && data.length ? data : []
        }
      })
    }),
    {
      enabled: false
    }
  )

  useEffect(() => {
    if (search) refetch()
  }, [search])

  return (
    <div className="landing-page container mx-auto py-8">
      <div className="search-movie flex justify-center mb-8">
        <input 
          type="text"
          className="px-6 py-3 text-2xl rounded-xl text-slate-200 bg-neutral-800"
          placeholder="Search Movie Title" value={inputSearch} onChange={e => setInputSearch(e.target.value)}
        />
      </div>
      <div className="max-w-screen-md mx-auto">
        {movies.map((movie, index) => {
          return (
            <MovieCard movie={movie} key={index} />
          )
        })}
        
      </div>
    </div>
  )
}
 
export default LandingPage