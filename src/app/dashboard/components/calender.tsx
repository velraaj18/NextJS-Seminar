"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useEffect } from "react";

export default function ExpenseCalender() {
  const [mounted, setMounted] = useState(false);

  // Skip rendering on the server to avoid hydration mismatch.
  // Render only after the component has mounted in the browser.
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loader/skeleton if you want
  }
  return (
    <div className="absolute bottom-7 left-7 ">
      <div className=" mb-2">
        <p className="text-xl text-gray-400">Calender</p>
      </div>
      <div className="rounded-lg ml-3">
        <Calendar
          className="!border-0 text-sm !w-[300px] !bg-[#F8F8F8]"
          tileClassName={"rounded-full"}
        />
      </div>
    </div>
  );
}
