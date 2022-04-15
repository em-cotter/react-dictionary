import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css"

export default function Dictionary(){
    let[keyword, setKeyword]= useState("")

    function handleResponse(response){
        console.log(response.data[0])
    }

    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword}`)
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse)
    }

    function handleChange(event){
        setKeyword(event.target.value)
    }

    return (
        <div className="Dictionray">
            <form onSubmit={search}>
                <input type="search" placeholder="Search word here..." autoFocus="on" onChange={handleChange}/>
            </form>
        </div>
    )
}