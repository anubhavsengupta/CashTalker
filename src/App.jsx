import { useState, useEffect } from 'react'
import './App.css'
import IncomeDetails from './Components/CostDetails/IncomeDetails.jsx'
import DisplayIncome from './Components/CostDetails/DisplayIncome.jsx';
import DisplayExpense from './Components/CostDetails/DisplayExpense.jsx';
import VoiceRecognizer from './Components/Dashboards/VoiceRecognizer.jsx';


function App() {
  const [entries, setEntries] = useState([]);
  const [voiceInput, setVoiceInput] = useState("");
  
  

  function setInput(voiceInput) {
    setVoiceInput(voiceInput);
    console.log("Setup the voice input: " + voiceInput)
  }
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
      <div class="Recognizer" s>
        <VoiceRecognizer setInput={setInput}>

        </VoiceRecognizer>
      </div>
    </>
  )
}

export default App
