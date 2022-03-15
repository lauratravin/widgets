import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {

const[term, setTerm] = useState(' ')
const[result, setResult] = useState([])

useEffect(() => {

    //you can use async and await directly in use Effect function so you have to:
  
       const search = async () => { 
           const {data} = await axios.get(" https://en.wikipedia.org/w/api.php?",
            {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                        }
            }); //get
            setResult(data.query.search)
        }
        if (term){
            search() //term cannot be empty for the api
        }
        

}, [term])

const renderResult = result.map((m) => {
    return(
        <div className="item" key={m.pageid}>
                <div className="content">
                    <div className="header"><h2>{m.title}</h2></div>
                    <span dangerouslySetInnerHTML={{__html: m.snippet}}></span>
                    {/* {m.snippet} */}
                </div>
        </div>
    )

})





    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input value={term} 
                            onChange={e => setTerm(e.target.value)} 
                            className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">{renderResult}</div>
           
        </div>
    );

};

export default Search;
