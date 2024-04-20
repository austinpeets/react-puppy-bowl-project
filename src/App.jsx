import { useState, useEffect } from 'react'
import CreatePlayer from './components/CreatePlayerForm'
import Details from './components/Details'
import Home from './components/Home'
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
          <Link to={"/home"}>Home</Link>
          <Link to={"/details"}>Details</Link>
          <Link to={"/createplayerform"}>Create Player</Link>
        </div>

        <div id="main-section">
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/details" element={<Details />}></Route>
            <Route path="/createplayerform" element={<CreatePlayer />}></Route>
          </Routes>
        </div>
      </div>
      
    </>
  )
}

export default App
