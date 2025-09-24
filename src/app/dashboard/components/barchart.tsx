"use client";

import { Bar } from "react-chartjs-2";
import "@/app/chartSetup"; // import the registration file

export default function BarChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"], // X-axis
    datasets: [
      {
        label: "Salary",
        data: [5000, 5200, 5100, 5300, 5400],
        backgroundColor: "#ED3F27", // teal
      },
      {
        label: "Expenses",
        data: [3000, 2800, 2900, 3100, 3000],
        backgroundColor: "#CBDCEB", // red
      },
      {
        label: "Savings",
        data: [2000, 2400, 2200, 2200, 2400],
        backgroundColor: "#0046FF", // blue
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const},
      title: { display: true, text: "Monthly finance tracker" },
    },
  };

  return <Bar data={data} options={options} className="mt-5"/>;
}
