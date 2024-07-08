import React from 'react'
import { useState, useContext } from 'react'
import Entry  from '../Display/Entry'
import { EntriesContext } from '../../Contexts/EntriesContext' 

function DisplayList(props) {
    
    const entries = useContext(EntriesContext);
    console.log(entries);

    return (
        <table className="item-table">
            <thead>
                <tr>
                    <th>Expense</th>
                    <th>Amount</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {entries.map((item, index) => (
                    <Entry expense={item.expense} amount={item.amount} update={props.update} id ={item.id} delete={props.delete}/>
                ))}
            </tbody>
        </table>
    )
}

export default DisplayList