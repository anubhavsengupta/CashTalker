import React from 'react'
import PieDashboard from '../Dashboards/PieDashboard'
import { useState } from 'react';
function DisplayExpense(props) {
    let currentList = props.data.filter(item => item.type === 'Expense');
    if (currentList.length === 0) {
        return (
            <h1 style={{textAlign: "center"}}>
                No Expenses
            </h1>
        )
    } 
    
    let labels = []
    let chartNumbers = []
    for (let i = 0; i<currentList.length; i++) {
        if (!labels.includes(currentList[i].expense)) {
            labels.push(currentList[i].expense);
            chartNumbers.push(currentList[i].amount);
        } else {
            const searchQuery = element => element === currentList[i].expense;
            chartNumbers[labels.findIndex(searchQuery)] += currentList[i].amount;
        }
    }
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
                <PieDashboard chartData={data} title="Expense Dashboard"></PieDashboard>
            </div>
         </div>
      )
  
}

export default DisplayExpense