import {useState, useEffect} from 'react'
import { pullPlayers } from '../API/index'
import PlayerCard from './PlayerCard'

export default function Home() {
    
const [players, setPlayers] = useState([])

useEffect(() => {
   async function fetchAllPlayers() {
    const players = await pullPlayers()
    setPlayers(players)
   }
   fetchAllPlayers()
}, [])
  
  return (
      <div className="Home">
        <h1>Home</h1>
        <ul>
          {players.map(player => {
            return (
              <PlayerCard key={player.id} player={player}/>
            )
          })}
        </ul>
      </div>
    );
  }