import { getData, setData } from "../Data/Data.tsx"
import { useState } from "react";

export default function CheckBox(prop: any) {
  let data = getData();
  const [currStatus, setStatus] = useState<boolean>(false);

  const handleCheck = () => {
    setStatus(!currStatus)
    setData(data)
  }

  const checkBoxStyle = {
    width: '20px',
    height: '20px',
    paddingRight: '10px', // Use camelCase
    border: '2px solid #333',
    borderRadius: '4px', // Use camelCase
    marginRight: '10px',
    accentColor: '#879793'
  };
  


  return (
    <>
      <input type="checkbox" checked={currStatus} onChange={handleCheck} style={checkBoxStyle}>
      </input>
    </>
  )
} 