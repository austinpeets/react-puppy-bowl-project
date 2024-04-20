import { useState, useEffect } from 'react'
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
      
      
    </>
  )
}

export default App
