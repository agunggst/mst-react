import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const Pagination = ({ totalData, showMin, showMax, nextPage, prevPage }) => {
  return (
    <div className='mx-2 mb-4 flex justify-between items-center'>
      <div>
        <p className="text-sm text-amber-500">
          Showing <span className="font-semibold">{showMin}</span> to <span className="font-semibold">{showMax >= totalData ? totalData : showMax}</span> of{' '}
          <span className="font-semibold">{totalData}</span> results
        </p>
      </div>
      <div className="flex">
        <ChevronLeftIcon 
          className={`h-8 w-8 border-2 ${showMin === 1 ? 'text-neutral-600 border-neutral-600' : 'text-amber-500 border-amber-500'}  rounded-full mr-2 cursor-pointer`} 
          onClick={prevPage}
        />
        <ChevronRightIcon 
          className={`h-8 w-8 border-2 ${showMax >= totalData ? 'text-neutral-600 border-neutral-600' : 'text-amber-500 border-amber-500'}  rounded-full cursor-pointer`} 
          onClick={nextPage}
        />
      </div>
    </div>
    
  )
}
 
export default Pagination