import React from 'react'
import PieDashboard from '../Dashboards/PieDashboard'
function DisplayIncome(props) {

    if (props.data.length === 0) {
        return (
            <>
            <h1>No Data to display</h1>
            </>
        )
    }

    let chartNumbers = [0, 0, 0, 0];
    let currentData = props.data;
    for (let i = 0; i<currentData.length; i++) {
        if (currentData[i].type === "Income") {
            switch (currentData[i].expense) {
                case "Savings":
                    chartNumbers[0] += currentData[i].amount
                    break;
                case "Investments":
                    chartNumbers[1] += currentData[i].amount
                    break;
                case "Deposits":
                    chartNumbers[2] += currentData[i].amount
                    break;
                case "Salary":
                    chartNumbers[3] += currentData[i].amount
                    break;
                default:
                    break;
            }
        }
    }
    
    let labels = ["Savings", "Investments", "Deposits", "Salary"]
    let data = {
        labels: labels,
        datasets: [{
            label: "Cost Spent ",
            data: chartNumbers,
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }]
    }
  return (
    <div class="income-wrapper">
        <div className="maincard">
            <PieDashboard chartData={data} title="Income Dashboard"></PieDashboard>
            
        </div>
     </div>
  )
}

export default DisplayIncome