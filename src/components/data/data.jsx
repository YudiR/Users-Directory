import React from "react";
import styled from 'styled-components'



  const Ul = styled.ul`
    list-style-type: none; `;



function Data(props) {
return(
    <div>
      <h1>{props.name}</h1>

      <Ul>
        <li> User Name: {props.username} </li>
        <li> Email: {props.email} </li>
        <li> Phone: {props.phone} </li>
        <li> Website: {props.website} </li>
      </Ul>
      
    </div>
  );
}

export default Data