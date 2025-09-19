"use client";

import { Bar } from "react-chartjs-2";
import "@/app/chartSetup"; // import the registration file

export default function BarChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Monthly Sales" },
    },
  };

  return <Bar data={data} options={options} />;
}
