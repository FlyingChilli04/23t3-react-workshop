// import React from 'react'

export default function ToDoItem(prop: any) { // remember we use typescript
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
    color: "#879793",
    display: 'flex',
  }
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={rectangleStyle}>
        <p style={text}>
          {prop.description}
        </p>
      </div>
    </div>
  )
}


