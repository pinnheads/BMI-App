import React, { useState } from "react";
import Calculator from "./Calculator"
import Result from "./Result"


export default function App(){

  const [userData, setUserData] = useState({
    userHeight: 0,
    userWeight: 0,
    userAge: 0,
    userGender: "Male",
    userBMI: 0
  });

  function fetchUserData(Data){
    setUserData(Data);
  }

  return (
    <div> 
      <h1 className="heading">B.M.I Calculator</h1>
      <div className="container-parent">
          <div className="container-child1">
            <Calculator returnData={fetchUserData}/>
          </div>
          <div className="vr"></div>
          <div className="container-child2">
            <Result userData={userData} />
          </div>
      </div>
   </div>
  )
}