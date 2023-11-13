import { useSelector } from "react-redux"
import MovieCard from "../components/MovieCard"

const Orders = () => {
  const orders = useSelector(state => state.movieReducer.orders)

  return (
    <div className="orders container mx-auto py-8 max-w-screen-md">
      <h2 className="text-5xl text-amber-500 font-semibold">Cart</h2>
      <div className="mt-12">
        {/* <MovieCard /> */}
        {orders.map((order, index) => {
          return <MovieCard movie={order} key={index} movieDetailPath={`/orders`} />
        })}
      </div>
    </div>
  )
}
 
export default Orders