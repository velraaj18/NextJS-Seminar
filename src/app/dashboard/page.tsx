"use client";

import React from "react";
import Navbar from "@/app/dashboard/components/navbar";
import RightMenu from "@/app/dashboard/components/rightmenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faBasketShopping,
  faHouse,
  faCamera,
  faTruck,
  faGift,
  faMobileAndroid,
} from "@fortawesome/free-solid-svg-icons";
import ExpenseCards from "./components/expensecards";
import Category from "./components/category";
import ExpenseCalender from "./components/calender";
import BarChart from "./components/barchart";
import PieChart from "./components/piechart";
import { useState } from 'react';
import AllAccounts from "../accounts/components/accountsModal";


const Dashboard = () => {

  const [isAccountsModalOpen, setIsAccountsModalOpen]  = useState(false);

  return (
    /* Outer layer - orange */
    <div className="bg-[#ffdac6] mx-4 lg:mx-[60px] my-2 lg:my-[10px] rounded-md min-h-screen p-4 lg:p-20">
      <div className="flex flex-row">
        {/* Left Main Content */}
        <div className="bg-[#EEEEEE] w-full lg:max-w-[1155px] rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none shadow-xl">
          <Navbar onOpenAccounts={() => setIsAccountsModalOpen(true)}/>

          {/* Wallet Header */}
          <div className="flex flex-1 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-5 gap-3">
            <div className="content-end">
              <FontAwesomeIcon icon={faWallet} className="w-10 text-red-400" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sky-400 text-2xl font-semibold">Home Wallet</p>
              <p className="text-gray-500 text-xs">change default wallet</p>
            </div>
          </div>

          {/* Charts */}
          <div className="flex flex-col lg:flex-row">
            {/* Bar Chart - 2/3 */}
            <div className="bg-white basis-2/3 h-[250px] sm:h-[300px] lg:h-[365px] ml-4 mr-4 lg:mr-0 lg:ml-6 mb-4 lg:mb-0 px-2 sm:px-6 lg:px-8 rounded-lg lg:rounded-l-lg shadow-md">
              <BarChart />
            </div>

            {/* Pie Chart - 1/3 */}
            <div className="bg-white basis-1/3 h-[250px] sm:h-[300px] lg:h-[365px] ml-4 lg:ml-0.5 mr-4 px-2 sm:px-6 lg:px-8 rounded-lg lg:rounded-r-lg shadow-md">
              <PieChart />
            </div>
          </div>

          {/* Categories Title */}
          <div className="mt-5">
            <p className="text-black ml-2 lg:ml-7 text-lg lg:text-xl font-semibold">
              Categories With Biggest Expense
            </p>
          </div>

          {/* Expense Cards */}
          <div className="flex flex-wrap gap-3 px-2 lg:mt-3 mb-5">
            <ExpenseCards
              icon={faBasketShopping}
              iconColor="text-red-500"
              title="Shopping Cost"
              amount={1000}
            />
            <ExpenseCards
              icon={faHouse}
              iconColor="text-yellow-500"
              title="Household"
              amount={6000}
            />
            <ExpenseCards
              icon={faTruck}
              iconColor="text-gray-500"
              title="Transport"
              amount={1000}
            />
            <ExpenseCards
              icon={faCamera}
              iconColor="text-green-500"
              title="Canon Camera"
              amount={3500}
            />
            <ExpenseCards
              icon={faGift}
              iconColor="text-black"
              title="Shopping Cost"
              amount={1000}
            />
            <ExpenseCards
              icon={faGift}
              iconColor="text-rose-500"
              title="Gifts"
              amount={1000}
            />
            <ExpenseCards
              icon={faMobileAndroid}
              iconColor="text-blue-300"
              title="Recharge Bills"
              amount={1000}
              iconSize="w-10 h-10"
            />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-[#F8F8F8] w-full lg:max-w-[400px] rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none shadow-xl relative hidden 2xl:block">
          <RightMenu />
          <Category />
          <ExpenseCalender />
        </div>
      </div>

      <AllAccounts isOpen={isAccountsModalOpen} onClose={ () => setIsAccountsModalOpen(false) } />
    </div>
  );
};

export default Dashboard;
