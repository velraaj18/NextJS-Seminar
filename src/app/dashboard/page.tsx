import React from 'react'
import Navbar from '@/app/dashboard/components/navbar'
import RightMenu from '@/app/dashboard/components/rightmenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import ExpenseCards from './components/expensecards'
import Category from './components/category'
import ExpenseCalender from './components/calender'


const Dashboard = () => {
  return (
    /* Outer layer - orange */
    <div className=' bg-[#ffdac6] mx-[60px] my-[10px] rounded-md h-[895px] p-20'>
      <div className='flex'> 
          <div className='bg-[#EEEEEE] h-[735px] w-[1155px] rounded-l-2xl shadow-xl'>
              <Navbar/>
              <div className='flex flex-1 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-5 gap-3'>
                <div className='content-end'>
                    <FontAwesomeIcon icon={faWallet} className='w-10 text-red-400' />
                </div>          
                <div className='flex flex-col gap-1'>
                    <p className=' text-sky-400 text-2xl font-semibold'>Home Wallet</p>
                    <p className='text-gray-500 text-xs'>change default wallet</p>
                </div>
                <div className=''></div>
              </div>

              <div className='flex'>
                  <div className='bg-[#ffffff] h-[365px] w-[700px] ml-6 px-2 sm:px-6 lg:px-8 rounded-l-lg shadow-md'>

                  </div>
                  <div className='bg-[#ffffff] h-[365px] w-[405px] ml-0.5 px-2 sm:px-6 lg:px-8 rounded-r-lg shadow-md'>
                    
                  </div>         
              </div>

              <div className='mt-5'>
                <p className=' text-black ml-7 text-xl font-semibold'>Categories With Biggest Expense</p>
              </div>

              <div className='flex gap-3'>
                <ExpenseCards/>
                <ExpenseCards/>
                <ExpenseCards/>
                <ExpenseCards/>
                <ExpenseCards/>
                <ExpenseCards/>
                <ExpenseCards/>
              </div>
          </div>
          <div className='bg-[#F8F8F8] h-[735px] w-[400px] rounded-r-2xl shadow-xl relative'>
              <RightMenu/>
              <Category/>
              <ExpenseCalender/>
          </div>
      </div>
    </div>
  )
}

export default Dashboard