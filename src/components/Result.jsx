import React from "react";
import ResultText from "./ResultText"

export default function Result(props){

  const BMI = props.userData.userBMI

  return (
    <div id="result">
      <h1 className="heading">Your Result</h1>
      {
        BMI !== 0 ? 
        (
          <div className="result-card">
            <div className="result-text">
              <ResultText BMI={BMI}/>
            </div>
          </div>
        )
        :
        (
          <div className="result-card">
            <div className="result-text" style={{color: "#22E67B"}}>
              <h4>Enter your data and press Calculate to<br /> see your result</h4>
            </div>
          </div>
        )
      }
    </div>
  )
}