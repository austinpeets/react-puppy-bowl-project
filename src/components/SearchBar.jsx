import {useState} from "react"

export default function SearchBar({term, setTerm}) {
   
    

    return (
        <form >
            <label id='search'>Search</label>
            <input value={term} onChange={(e) => setTerm(e.target.value)}id='search' type='text'/>
        </form>
        )
}

