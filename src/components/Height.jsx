import React, { useState } from "react";
import AgeWeight from "./AgeWeight";

export default function Height(props){
  const [height, setHeight] = useState(170);
  const gender = props.gender;

  function handleChange(e){
    const value = e.target.value;
    setHeight(() => {
      return value;
    });
  }

  return (
    <div>
    <br />
    <div className="gender-selector">
      <div className="slider">
        <p>Height</p>
        <input type="text" value={height} disabled/>
        <input type="range" min="120" max="220" step="1" value={height} onChange={handleChange}/>
      </div>
    </div>
    <AgeWeight passedFunction={props.passedFunction} gender={gender} height={height} />
    
  </div>)
}