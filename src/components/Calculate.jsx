import React, { useState } from "react";

export default function Calculate(props){

  const height = props.height;
  const weight = props.weight;
  const age = props.age;
  const gender = props.gender;
  // eslint-disable-next-line
  const [BMI, setBMI] = useState();

  function calculateBMI(){
    const heightSquare = Math.pow((height/100), 2);
    var BMI = Math.round((weight/heightSquare * 10 )) / 10;
    setBMI(BMI);
    const userData = {
      userHeight: height,
      userWeight: weight,
      userAge: age,
      userGender: gender,
      userBMI: BMI
    }
    props.passedFunction(userData);
  }

  

  return (<div>
    <button className="calculate" type="submit" href="#id" onClick={calculateBMI}>calculate</button>
  </div>)
}