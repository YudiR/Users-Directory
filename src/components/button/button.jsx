import React from 'react'
import Button from 'react-bootstrap/Button';

function Buttons (props) {
    return (
        <div>
        <Button variant="info" onClick={e => props.delete(props.index)}>
        X
      </Button>
      </div>
        
    )
}

export default Buttons