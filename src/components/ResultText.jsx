import React from "react";

export default function(props){
  const BMI = props.BMI;

  if(BMI <= 18.5){
    return (
      <div>
        <p className="category">Underweight</p>
        <h2 className="BMI">{BMI}</h2>
        <p className="range">Underweight BMI Range:</p>
        <p style={{margin: "2px 0"}}> Less than 18.5 kg/m<sup>2</sup></p>
        <h4>You should consult a dietician <br /> and get a healthy diet plan</h4>
      </div>
    )
  } else if(BMI > 18.5 && BMI <= 24.9){
    return (
      <div>
        <p className="category">Normal</p>
        <h2 className="BMI">{BMI}</h2>
        <p className="range">Normal BMI Range:</p>
        <p style={{margin: "2px 0"}}>18.5 - 24.9 kg/m<sup>2</sup></p>
        <h4>You are on track! <br />Good job and keep maintaining it.</h4>
      </div>
    )
  } else if(BMI > 24.9  && BMI <= 30){
    return (
      <div>
        <p className="category">Overweight</p>
        <h2 className="BMI">{BMI}</h2>
        <p className="range">Overweight BMI Range:</p>
        <p style={{margin: "2px 0"}}>25 - 29.9 kg/m<sup>2</sup></p>
        <h4>Try exercising a bit. <br /> So that you can get <br /> your weight in control.</h4>
      </div>
    )
  } else if(BMI > 30){
    return (
      <div>
        <p className="category">Obese</p>
        <h2 className="BMI">{BMI}</h2>
        <p className="range">Obese BMI Range:</p>
        <p style={{margin: "2px 0"}}>30 - 39.9 kg/m<sup>2</sup></p>
        <h4>Try getting your weight in control. <br /> Obesity causes a lot of health issues</h4>
      </div>
    )
  }
}