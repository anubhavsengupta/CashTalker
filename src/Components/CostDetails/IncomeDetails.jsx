import React from 'react'
import { useState } from 'react';

function IncomeDetails(props) {
    const [type, setType] = useState('Income');
    const [expense, setExpense] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');

    function handleSubmit(event, type, expense, amount, date) {
        
        event.preventDefault();
        type === '' ? type = 'Income' : type;
        expense === '' ? expense = 'Investments' : expense;
        props.createEntry(type, amount, expense, date);
        resetForm();
    }
    const resetForm = () => {
        setType('');
        setExpense('');
        setAmount('');
        setDate('');
      };

    return (
        <div class="income-wrapper">
            <div class="maincard">
                <h1 class="income">Add Entry</h1>
                <section class="fields">
                    <form onSubmit={(e) => handleSubmit(e, type, expense, amount, date)}>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="type">Type</label>
                                <select name="type" id="type" value={type} onChange={(e) => {setType(e.target.value)}}>
                                    <option value="Income">Income</option>
                                    <option value="Expense">Expenses</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="amount">Amount</label>
                                <input type="text" value={amount} name="amount" onChange={(e) => {setAmount(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label for="costs">Expense</label>
                                
                                {type === 'Income' ? (
                                    <>
                                        <select name="costs" id="costs" value={expense} onChange={(e) => {setExpense(e.target.value)}}>
                                            <option value="Savings">Savings</option>
                                            <option value="Investments">Investments</option>
                                            <option value="Salary">Salary</option>
                                            <option value="Deposits">Deposits</option>
                                        </select>
                                    </>
                                    ) : <input type="text" value={expense} name="costs" onChange={(e) => {setExpense(e.target.value)}}/>}

                            </div>
                            <div className="form-group">
                                <label for="date">Date</label>
                                <input type="date" name="date" value={date} onChange={(e) => {setDate(e.target.value)}}/>
                            </div>
                        </div>
                        <button class="formEntry" type="submit">Submit</button>
                    </form>
                    
                </section>

            </div>
        </div>

    )
}

export default IncomeDetails