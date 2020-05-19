import React from "react" ;
import GenderCard from "./GenderCard";

export default function Calculator(props){

  function getUserData(data){
    props.returnData(data);
  }

  return (<div className="calculator">
    <GenderCard getData={getUserData}/>
  </div>)
}