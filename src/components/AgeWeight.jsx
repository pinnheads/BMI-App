import React, { useState } from "react";
import Calculate from "./Calculate";


export default function AgeWeight(props){

  const gender = props.gender;
  const height = props.height;
  const [age, setAge] = useState(20);
  const [weight, setWeight] = useState(40);


  function handleAge(e){
    const ageName = e.target.name;

    setAge(() => {
      if(ageName === "AgeDecrease"){
        return age - 1;
      } else if(ageName === "AgeIncrease") {
        return age + 1;
      }
    })  
  }

  function handleAgeInput(event){
    const value = event.target.value;
    setAge(value);
  }

  function handleWeight(e){
    const weightName = e.target.name;

    setWeight(() => {
      if(weightName === "WeightIncrease") {
        return weight + 1;
      } else if(weightName === "WeightDecrease") {
        return weight - 1;
      }
    })
  }

  function handleWeightInput(event){
    const value = event.target.value;
    setWeight(value);
  }

  return (
    <div>
      <br />
      <div className="selector">
        <div className="card">
          <p>Age</p>
          <input type="text" value={age} name="age" maxLength="2" pattern="\d*" onChange={handleAgeInput} required/>
          <br />
          <button className="inc-dec" name="AgeIncrease" onClick={handleAge}>+</button>
          <button className="inc-dec" name="AgeDecrease" onClick={handleAge}>-</button>
        </div>
        <div className="card">
         <p>Weight</p>
          <input type="text" value={weight} name="weight" maxLength="2" pattern="\d*" onChange={handleWeightInput} required />
          <br />
          <button className="inc-dec" name="WeightIncrease" onClick={handleWeight}>+</button>
          <button className="inc-dec" name="WeightDecrease" onClick={handleWeight}>-</button>
        </div>
      </div>
      <Calculate passedFunction={props.passedFunction} gender={gender} height={height} weight={weight} age={age}/>
    </div>
    )
}