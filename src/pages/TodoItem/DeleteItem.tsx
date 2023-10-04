import { getData, setData } from "../Data/Data.tsx"
import { useState } from "react"

export default function DeleteItem(props: any) {
  let data = getData()
  const buttonStyle = {
    color: '#879793',
    display: 'flex',
    position: 'absolute',
    right: '15%',
    cursor: 'pointer',
  }

  function deleteItem() {
    const foundIndex = data.findIndex((item) => item.id === props.id);
    data.splice(foundIndex, 1);
    setData(data)
    props.addArray(data);
    console.log(data)
  }
  
  return (
    <button style={buttonStyle} onClick={() => deleteItem()}>
      X
    </button>
  )
}