import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

interface AccountCardsProps {
  icon: IconDefinition
  accId: number
  accNumber: string 
  bankName: string
  ifscCode : string 
  phoneNumber : string
  accBalance : string
  iconColor?: string
  iconSize?: string
}

const AccountCards: React.FC<AccountCardsProps> = ({
  icon,
  accId,
  ifscCode,
  phoneNumber,
  accBalance,
  bankName,
  accNumber,
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
          <p className="text-gray-500 text-xs">{bankName}</p>
          <p className="text-xs">{`$${accNumber}`}</p>
        </div>
      </div>
    </div>
  )
}

export default AccountCards