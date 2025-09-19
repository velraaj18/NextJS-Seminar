"use client";

import { Pie } from "react-chartjs-2";
import "@/app/chartSetup";

export default function PieChart() {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Votes",
        data: [300, 50, 100],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
        ],
      },
    ],
  };

  return <Pie data={data} />;
}
