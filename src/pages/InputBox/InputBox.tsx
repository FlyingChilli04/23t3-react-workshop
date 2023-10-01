// import React from "react"
import { useState } from "react";
import { getData, setData } from "../Data/Data.tsx"
import { ExercisePage } from "../ExercisePage/ExercisePage.tsx"

let globalId = 4;

export default function InputBox() {
  const rectangleStyle = {
    width: '70%',
    height: '50px',
    backgroundColor: '#D5DBDA',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    padding: '5px',
    justifyContent: 'left',
    margin: '100px',
  };

  const formStyle = {
    display: 'flex', // Make the form a flex container
    alignItems: 'center', // Align items vertically within the form
    width: '100%', // Make the form take the full width of the container
  };

  const text = {
    color: '#879793',
    display: 'flex',
    marginRight: '10px',
    marginLeft: '10px',
    width: '100%',
  };

  const button = {
    color: '#879793',
    display: 'flex',
    marginRight: '10px',
    marginLeft: '10px',
    cursor: 'pointer',
  }

  const [desc, setDesc] = useState<string>('');

  const handleSubmit = (e: any) => {
    e.preventDefault(); // prevents page refreshing
    console.log("new item added")
    let data = getData();
    globalId++;
    data.push({
      id: globalId,
      description: desc
    })
    setData(data)
    console.log(data)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={rectangleStyle}>
        <form style={formStyle} onSubmit={handleSubmit}>
          <textarea required value={desc} onChange={(e) => setDesc(e.target.value)} style={text} placeholder="Add a new task"></textarea>
          <button style={button}>+</button>
        </form>
      </div>
    </div>
  );
}