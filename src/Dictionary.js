import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results"

export default function Dictionary(){
    let[keyword, setKeyword]= useState("");
    let[results, setResults]=useState(null);

    function handleResponse(response){
       
        setResults(response.data[0])
    }

    function search(event){
        event.preventDefault();
       
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse)
    }

    function handleChange(event){
        setKeyword(event.target.value)
    }

    return (
        <div className="Dictionary">
            <section>
            <form onSubmit={search}>
                <input type="search" placeholder="Search word here..." autoFocus="on" onChange={handleChange}/>
            </form>
            <span className="hint">e.g sunset, yoga, human...</span>
            </section>
            <Results results={results}/>
        </div>
    )
}