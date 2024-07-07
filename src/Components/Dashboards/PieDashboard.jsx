
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, Title, CategoryScale } from 'chart.js';

function PieChart({ chartData, title }) {
  
Chart.register(ArcElement, Tooltip, Legend, Title, CategoryScale);
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <div className="pieChart">
        <Pie
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Income Managed"
              }
            }
          }}
        />
      </div>
    </div>
  );
}
export default PieChart;