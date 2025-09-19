import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

interface ExpenseCardProps {
  icon: IconDefinition
  amount: string | number
  title: string
  iconColor?: string
  iconSize?: string
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({
  icon,
  title,
  amount,
  iconColor = "text-gray-500",
  iconSize = "w-10",          
}) => {
  return (
    <div
      className="bg-[#ffffff] h-[120px] w-[127px] mt-4 ml-6 rounded-md shadow-md
                 transition-transform duration-300 ease-in-out 
                 hover:scale-105 hover:shadow-lg"
    >
      <div className="flex flex-1 flex-col">
        <div>
          <FontAwesomeIcon
            icon={icon}
            className={`${iconSize} mt-5 ml-4 ${iconColor}`}
          />
        </div>
        <div className="mt-4 ml-4">
          <p className="text-gray-500 text-xs">{title}</p>
          <p className="text-xs">{`$${amount}`}</p>
        </div>
      </div>
    </div>
  )
}

export default ExpenseCard
