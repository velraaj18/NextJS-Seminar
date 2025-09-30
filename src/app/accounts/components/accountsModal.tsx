"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import AccountCards from "./accountCards";
import {
  faBank,
  faUniversity,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

interface AllAccountsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AllAccounts({ isOpen, onClose }: AllAccountsProps) {
  const accounts = [
    {
      accId: 1,
      accNumber: "1234567890",
      bankName: "SBI",
      ifscCode: "SBIN0001",
      phoneNumber: "9876543210",
      accBalance: "$12,500",
      icon: faBank,
      iconColor: "text-blue-500",
      iconSize: "w-8 h-8",
    },
    {
      accId: 2,
      accNumber: "9876543210",
      bankName: "HDFC",
      ifscCode: "HDFC0002",
      phoneNumber: "9123456780",
      accBalance: "$25,000",
      icon: faUniversity,
      iconColor: "text-green-500",
      iconSize: "w-8 h-8",
    },
    {
      accId: 3,
      accNumber: "1122334455",
      bankName: "ICICI",
      ifscCode: "ICIC0009",
      phoneNumber: "9988776655",
      accBalance: "$7,800",
      icon: faWallet,
      iconColor: "text-yellow-500",
      iconSize: "w-8 h-8",
    },
  ];

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <DialogPanel className="relative w-full max-w-2xl transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all">
            {/* X button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-3 text-white hover:text-gray-300"
              aria-label="Close"
            >
              ✕
            </button>
            <DialogTitle
              as="h3"
              className="text-lg font-medium leading-6 text-white bg-red-600 p-6 m-0"
            >
              Your Accounts
            </DialogTitle>

            <div className="mt-4 grid grid-cols-3 gap-4">
              {accounts.map((acc) => (
                <AccountCards
                  key={acc.accId}
                  icon={acc.icon}
                  accId={acc.accId}
                  accNumber={acc.accNumber}
                  bankName={acc.bankName}
                  ifscCode={acc.ifscCode}
                  phoneNumber={acc.phoneNumber}
                  accBalance={acc.accBalance}
                  iconColor={acc.iconColor}
                  iconSize={acc.iconSize}
                />
              ))}
            </div>

            <div className="mt-6 flex justify-end space-x-2 bg-gray-500 p-4">
              <button
                onClick={onClose}
                className="rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20"
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
