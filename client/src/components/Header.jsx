import { Link } from "react-router-dom"
import { ShoppingCartIcon } from '@heroicons/react/20/solid'

const Header = () => {
  return (
    <div className="app-title px-12 py-6 bg-zinc-600 flex justify-between items-center">
      <Link to="/">
        <span className='text-4xl font-semibold text-white'>Movie</span>
        <span className='text-4xl font-semibold text-amber-300'>App</span>
      </Link>
      <Link to="/orders">
        <ShoppingCartIcon className="h-8 w-8 text-neutral-300" />
      </Link>
    </div>
  )
}
 
export default Header