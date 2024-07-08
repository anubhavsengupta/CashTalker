import React from 'react'
import { useState } from 'react';
import PopupEdit from './PopupEdit';
function Entry(props) {
    const [edit, setEdit] = useState(false);
    if (edit) {
        return (
        <PopupEdit trigger={true} closePopup={
            () => {
                setEdit(false)
                }
            } 
            updatePopup={(newExpense, newAmount) => props.update(props.id, newExpense, newAmount)}> 
            <h3>My Popup</h3>
        </PopupEdit>
        )
    }
    return (
        <tr className="item">
            <td>{props.expense}</td>
            <td>${props.amount}</td>
            <td>
                <button className="edit-button" onClick={() => setEdit(true)}>Edit</button>
                <button className="delete-button">Delete</button>
            </td>
        </tr>
    )

}

export default Entry