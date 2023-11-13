const MovieCard = ({ movie }) => {
  return (
    <div className="px-6 py-3 flex items-center border-2 border-zinc-500 mb-3 rounded-xl mx-2 cursor-pointer">
      <img src={movie.Poster} alt="movieApp" className="h-36 w-32 object-contain border-r-4 border-amber-300 pr-4" />
      <div className="pl-4">
        <h2 className="text-xl font-semibold text-amber-500 mb-4">{movie.Title}</h2>
        <h2 className="text-base font-medium bg-zinc-500 w-fit px-2 rounded-xl">{movie.Year}</h2>
      </div>
    </div>
  )
}
 
export default MovieCard