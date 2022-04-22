import React from "react";
import "./Meaning.css"
import Synonyms from "./Synonyms"

export default function Meaning(props){
console.log (props.meanings)
return (
  <div className="Meaning">
    <h3>{props.meanings.partOfSpeech}</h3>
    {props.meanings.definitions.map(function(definition, index){
        return (
          <div key="index">
            <p>
              <strong>Definition:</strong>{definition.definition}
              <br/>
              <strong>Example:</strong><em>{definition.example}</em>
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
    })}
    
  </div>
); 
}