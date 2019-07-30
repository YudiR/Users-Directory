import React from 'react'

function Name (props) {
    return (
        <div>
        <h4 onClick={ e =>{props.data(props.index)}} >{props.name}</h4>
        

        </div>
    )
}

export default Name