import React from 'react'

function Name (props) {
    return (
        <div>
        <h4 onClick={ e =>{props.data(props.index)}} >{props.name}</h4>
        <button variant="info" onClick={e => props.delete(props.index)}>
        X
      </button>

        </div>
    )
}

export default Name