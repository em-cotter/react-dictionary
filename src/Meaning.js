import React from "react";
import "./Meaning.css"

export default function Meaning(props){
console.log (props.meanings)
return (
  <div className="Meaning">
    <h3>{props.meanings.partOfSpeech}</h3>
    {props.meanings.definitions.map(function(definition, index){
        return (
          <div key="index">
            <p>{definition.definition}</p>
            <em>{definition.example}</em>
          </div>
        );
    })}
    
  </div>
); 
}