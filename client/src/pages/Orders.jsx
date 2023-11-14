import { useDispatch, useSelector } from "react-redux"
import MovieCard from "../components/MovieCard"
import { useNavigate } from "react-router-dom"

const Orders = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const orders = useSelector(state => state.movieReducer.orders)

  const checkout = () => {
    dispatch({
      type: 'CHECKOUT_ORDER'
    })
    navigate('/checkout')
  }

  return (
    <div className="orders container mx-auto py-8 max-w-screen-md">
      <h2 className="text-5xl text-amber-500 font-semibold">Cart</h2>
      <div className="mt-12">
        {orders.map((order, index) => {
          return <MovieCard movie={order} key={index} movieDetailPath={`/orders`} />
        })}
      </div>
      {orders.length !==0 && <div className="flex justify-end mt-6">
        <div className=" bg-amber-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={checkout}>Checkout</div>
      </div>}
    </div>
  )
}
 
export default Orders