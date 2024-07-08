import { useState } from 'react';


import React from 'react'
import './popup.css'
function PopupEdit(props) {
    const [expense, setExpense] = useState("");
    const [amount, setAmount] = useState("");

    function update(expense, amount) {
        console.log("Updating called form PopupEdit");
     
        props.updatePopup(expense, amount);
        
        props.closePopup();
    }


    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">

                <h1>Edit</h1>
                <form onSubmit={(e) => {
                        e.preventDefault();

                        update(expense, amount);
                        }}>
                    <input
                        value={expense}
                        onChange={e => setExpense(e.target.value)}
                        placeholder="Expense Description"
                        type="text"
                        required
                    />
                    <input
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        placeholder="Amount"
                        type="text"
                        required
                    />
                    <button type ="submit">Submit</button>
                </form>
            </div>
        </div>
        
    ) : "";
}

export default PopupEdit