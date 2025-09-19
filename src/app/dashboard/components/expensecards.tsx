import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

const ExpenseCards = () => {
  return (
    <div className='bg-[#ffffff] h-[120px] w-[127px] mt-4 ml-6 rounded-md shadow-md'>
      <div className='flex flex-1 flex-col'>
        <div className=''>
           <FontAwesomeIcon icon={faBasketShopping} className='w-10 mt-5 ml-4 text-red-500'/>
        </div>
        <div className='mt-4 ml-4'>
          <p className='text-gray-500 text-xs'>Shopping cost</p>
          <p className='text-xs'>$1000</p>
        </div>
      </div>
    </div>
  )
}

export default ExpenseCards