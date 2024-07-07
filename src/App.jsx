import { useState } from 'react'
import './App.css'
import IncomeDetails from './Components/CostDetails/IncomeDetails.jsx'
import DisplayIncome from './Components/CostDetails/DisplayIncome.jsx';
import DisplayExpense from './Components/CostDetails/DisplayExpense.jsx';
function App() {
  const [entries, setEntries] = useState([]);

  function createEntry(type, amount, expense, date) {
    console.log("Creating entry: " + type + " " + amount + " " + expense + " " + date)
    setEntries([...entries, {type: type, amount: amount, expense: expense, date: date}]);
  }
  
  return (
    <>
      <IncomeDetails createEntry={createEntry}></IncomeDetails>

      <div className="views">
        <section>
        <DisplayIncome data={entries}></DisplayIncome>
        </section>
        <section> 
        <DisplayExpense data={entries}></DisplayExpense>
        </section>
      </div>

    </>
  )
}

export default App
