import { useSelector } from "react-redux"
import MovieCard from "../components/MovieCard"

const Checkout = () => {
  const checkoutOrders = useSelector(state => state.movieReducer.checkoutOrders)

  return (
    <div className="checkout container mx-auto py-8 max-w-screen-md">
      <h2 className="text-5xl text-amber-500 font-semibold">Thank You!</h2>
      <div className="mt-12">
        {checkoutOrders.map((order, index) => {
          return <MovieCard movie={order} key={index} movieDetailPath={`/checkout`} />
        })}
      </div>
    </div>
  )
}
 
export default Checkout