import { useState, useEffect } from 'react'
import CreatePlayer from './components/CreatePlayerForm'
import Details from './components/Details'
import SearchBar from './components/SearchBar'
import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"

import './App.css'

function App() {
  const [player, setPlayers] = useState([])

  useEffect(() => {
  
    async function pullPlayers() {
      try {
      const processing = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2401-ftb-mt-web-pt/players')
      const data = await processing.json()
      return data
    } catch (error){
      console.error('Error pulling players', error)
    }
  } 
  pullPlayers()
  }
  )

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to={"/createplayer"}>Create Player</Link>
          <Link to={"/details"}>Details</Link>
          <Link to={"/searchbar"}>Search</Link>
        </div>

        <div id="main-section">
          <Routes>
            <Route path="/CreatePlayer" element={<CreatePlayer />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/SearchBar" element={<SearchBar />} />
          </Routes>
        </div>
      </div>
      
    </>
  )
}

export default App
