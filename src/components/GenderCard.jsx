import React, { useState } from "react";
import Height from "./Height";

export default function GenderCard(props){

  const [gender, setGender] = useState("Male");

  function setMale(){
    setGender("Male");
  }
  function setFemale(){
    setGender("Female");
  }

  return (
    <div>
      <label>1. Select your Gender: <span style={{color:"#DA0059"}}>{gender}</span></label>
      <br />
      <div className="selector">
        <div className="card">
          <button className="gender" onClick={setMale}><i className="fas fa-male fa-4x"></i><br /><span style={{marginTop:"5px"}}>Male</span></button>
        </div>
        <div className="card">
          <button className="gender"  onClick={setFemale}><i className="fas fa-female fa-4x"></i><br /><span style={{marginTop:"5px"}}>Female</span></button>
        </div>
      </div>
      <Height passedFunction={props.getData} gender={gender}/>
    </div>
  )
}