import React from "react";

export default function Meaning(props){
console.log (props.meanings)
return (
  <div className="Meaning">
    <h3>{props.meanings.partOfSpeech}</h3>
    {props.meanings.definitions.map(function(definition, index){
        return (
          <div key="index">
            <p>{definition.definition}</p>
            <p>{definition.example}</p>
          </div>
        );
    })}
    
  </div>
); 
}