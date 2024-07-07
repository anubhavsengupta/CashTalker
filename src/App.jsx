import { useState, useEffect } from 'react'
import './App.css'
import IncomeDetails from './Components/CostDetails/IncomeDetails.jsx'
import DisplayIncome from './Components/CostDetails/DisplayIncome.jsx';
import DisplayExpense from './Components/CostDetails/DisplayExpense.jsx';
import VoiceRecognizer from './Components/Dashboards/VoiceRecognizer.jsx';
import { CohereClient } from "cohere-ai";

function App() {
  const [entries, setEntries] = useState([]);
  const [voiceInput, setVoiceInput] = useState("");
  const [suggestion, setSuggestion] = useState("");
  useEffect(() => {
    if (voiceInput.length === 0) {
       return;
    }
        let userPrompt = voiceInput;
        const cohere = new CohereClient({
          token: import.meta.env.VITE_KEY,
      });

      (async () => {
          const prediction = await cohere.generate({
              prompt: userPrompt,
              maxTokens: 1000,
          });
          
          try {
            setSuggestion(prediction);
          } catch (error) {
             console.error(error);
          }
      })();

  }, [voiceInput]);


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
      <div>
        <VoiceRecognizer setInput={setInput} voiceText={suggestion === "" ? "" : suggestion.generations[0].text}>

        </VoiceRecognizer>
      </div>
      <h2 style={{textAlign: "center", color: "white"}}>Item List</h2>
    </>
  )
}

export default App
