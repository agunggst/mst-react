import { useEffect, useState } from "react"
import { fetchMovies } from "../api"
import { useQuery } from "react-query"
import { useDispatch, useSelector } from "react-redux"
import useDebounce from "../hooks/useDebounce"
import MovieCard from "../components/MovieCard"
import Pagination from "../components/Pagination"

const LandingPage = () => {
  const dispatch = useDispatch()
  const movies = useSelector(state => state.movieReducer.movies)
  const totalData = useSelector(state => state.movieReducer.totalData)

  const [inputSearch, setInputSearch] = useState('Pokemon')
  const search = useDebounce(inputSearch)
  const [page, setPage] = useState(1)
  const perPage = 10

  const { refetch } = useQuery(
    'search-movies',
    () => fetchMovies(search, page, ({ status, data, totalData }) => {
      dispatch({
        type: 'SET_MOVIES',
        payload: {
          movies: status === 'success' && data.length ? data : [],
          totalData
        }
      })
    }),
    {
      enabled: false
    }
  )
  const nextPage = () => {
    if (perPage + perPage * (page - 1) !== totalData) {
      setPage(page + 1)
    }
  }
  const prevPage = () => {
    if (1 + perPage * (page - 1) !== 1) {
      setPage(page - 1)
    }
  }

  useEffect(() => {
    if (search) refetch()
  }, [page])
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
      {movies.length && <div className="max-w-screen-md mx-auto">
        <Pagination 
          totalData={totalData} 
          showMin={1 + perPage * (page - 1)} 
          showMax={perPage + perPage * (page - 1)} 
          nextPage={nextPage}
          prevPage={prevPage}
        />
        {movies.map((movie, index) => {
          return (
            <MovieCard movie={movie} key={index} />
          )
        })}
      </div>}
    </div>
  )
}
 
export default LandingPage