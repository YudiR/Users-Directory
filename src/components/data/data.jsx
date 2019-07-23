import React from "react";

function Data(props) {
  return (
    <div>
      <h1>{props.name}</h1>

      <h4>Information:</h4>
      <ul>
        <li> User Name: {props.username} </li>
        <li> Email: {props.email} </li>
        <li> Phone: {props.phone} </li>
        <li> Website: {props.website} </li>
      </ul>
    </div>
  );
}

export default Data