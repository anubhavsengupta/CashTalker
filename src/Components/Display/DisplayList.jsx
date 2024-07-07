import React from 'react'
import { useState, useContext } from 'react'
import Entry  from '../Display/Entry'
import { EntriesContext } from '../../Contexts/EntriesContext' 

function DisplayList() {
    const entries = useContext(EntriesContext);
    console.log(entries);

  return (
    <ul>
        {entries.map((item, index) => (
            <Entry
                expense={item.expense} 
            />
        ))}
    </ul>
  )
}

export default DisplayList