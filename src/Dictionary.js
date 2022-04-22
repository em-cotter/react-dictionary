import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results"
import Photos from "./Photos"

export default function Dictionary(){
    let[keyword, setKeyword]= useState("");
    let[results, setResults]=useState(null);
let [photos, setPhotos]=useState(null);
    function handleResponse(response){
       
        setResults(response.data[0])
    }
   function handlePexelsResponse(response){
console.log(response)
setPhotos(response.data.photos)
   }

    function search(event){
        event.preventDefault();
       
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse)

        let pexelsApiKey =
          "563492ad6f91700001000001d7dde48e719f41e290835fbaece93b2d";
          let pexelUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
          axios.get(pexelUrl, { headers: {"Authorization" : `Bearer ${pexelsApiKey}`} }).then(handlePexelsResponse);
          
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
            <Photos photos={photos}/>
        </div>
    )
}