import React from "react";
import "./Results.css"

export default function Phonetic(props){
if (props.phonetic.audio){
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        <span>       </span>
       
        {props.phonetic.text}
      </div>
    );
}else{
    return null;
}
    
  
}