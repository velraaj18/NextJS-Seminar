"use client";

import { Pie } from "react-chartjs-2";
import "@/app/chartSetup";

export default function PieChart() {
  const data = {
    labels: ["Salary", "Expenses", "Savings"],
    datasets: [
      {
        label: "Jan",
        data: [300, 50, 100],
        backgroundColor: [
          "#ED3F27",
          "#CBDCEB",
          "#0046FF",
        ],
      },
    ],
  };

  return <Pie data={data} className=" mt-2 max-w-[300px] max-h-[300px] mx-auto"/>;
}
