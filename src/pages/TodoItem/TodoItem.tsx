// import React from 'react'
import CheckBox from "./CheckBox.tsx"
import DeleteItem from "./DeleteItem.tsx"
import { useState } from "react"


export default function ToDoItem(props: any) { // remember we use typescript
  const rectangleStyle = {
    width: '70%', // not must add '' for the code to work
    height: '50px',
    backgroundColor: '#D5DBDA',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    padding: '5px',
    justifyContent: 'left',
    margin: "10px"
  };

  const text = {
    size: '20px',
    fontFamily: 'Roboto, sans-serif',
    color: "#879793",
    display: 'flex',
  }
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={rectangleStyle}>
        <CheckBox addArray={props.addArray}/>
        <p style={text}>
          {props.description}
        </p>
        <DeleteItem key={props.id} addArray={props.addArray}/>
      </div>
    </div>
  )
}


