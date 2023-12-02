"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Onion", "Carrot", "Cucumber", "Potato"],
  datasets: [
    {
      label: "# of Sales",
      data: [120, 140, 119, 34],
      backgroundColor: [
        "rgb(196 181 253)",
        "rgb(99, 102, 241)",
        "rgb(20 184 166)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgb(255,255,255)",
        "rgb(255,255,255)",
        "rgb(255,255,255)",
        "rgb(255,255,255)",
      ],
      borderWidth: 1,
    },
  ],
};

const BestSellingChart = () => {
  return (
    <div className="bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Best selling products</h2>
      <Pie data={data} />
    </div>
  );
};

export default BestSellingChart;
