import React from 'react'
import Button from 'react-bootstrap/Button';

function Name (props) {
    return (
        <div>
        <h4 onClick={ e =>{props.data(props.index)}} >{props.name}</h4>
        <Button variant="info" onClick={e => props.delete(props.index)}>
        X
      </Button>

        </div>
    )
}

export default Name