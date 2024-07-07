import React from 'react'

function Entry(props) {
    return (
        <div className="item">
            <li>
                {props.expense}
            </li>
            <button onClick={() => {
                console.log("Clicked");
            }}>Edit</button>
            <button>Delete</button>

        </div>
        

    )
}

export default Entry