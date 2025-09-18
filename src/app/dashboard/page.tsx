import React from 'react'
import Navbar from '@/app/dashboard/navbar'
import RightMenu from '@/app/dashboard/rightmenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'




const Dashboard = () => {
  return (
    <div className=' bg-[#ffdac6] mx-[60px] my-[10px] rounded-md h-[895px] p-20'>
      <div className='flex'>
          <div className='bg-[#edede9] h-[735px] w-[1155px] rounded-l-2xl shadow-xl'>
              <Navbar/>
              <div className='flex flex-1 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-10 gap-3'>
                <div className='content-end'>
                    <FontAwesomeIcon icon={faWallet} className='w-10 text-red-400' />
                </div>          
                <div className='flex flex-col gap-1'>
                    <p className=' text-sky-400 text-2xl font-semibold'>Home Wallet</p>
                    <p className='text-gray-500 text-xs'>change default wallet</p>
                </div>
                <div className=''></div>
              </div>
              
          </div>
          <div className='bg-[#ffffff] h-[735px] w-[400px] rounded-r-2xl shadow-xl'>
              <RightMenu/>
          </div>
      </div>
    </div>
  )
}

export default Dashboard