import {useState, useEffect} from 'react'
import { pullPlayers } from '../API/index'
import PlayerCard from './PlayerCard'
import SearchBar from './SearchBar'

export default function Home() {
const [term, setTerm] = useState('')
const [players, setPlayers] = useState([])

useEffect(() => {
   async function fetchAllPlayers() {
    const players = await pullPlayers()
    setPlayers(players)
   }
   fetchAllPlayers()
}, [])
  
const filterPlayers = players.filter(player => player.name.toLowerCase().includes(term.toLowerCase()))

  return (
      <div className="Home">
        <h1>Home</h1>
        <SearchBar term={term} setTerm={setTerm}/>
        <ul>
          {filterPlayers.map(player => {
            return (
              <PlayerCard key={player.id} player={player}/>
            )
          })}
        </ul>
      </div>
    );
  }