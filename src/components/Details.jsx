import PlayerCard from "./PlayerCard";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import { pullSinglePlayer } from "../API";

export default function Details() {
  const [player, setSinglePlayer] = useState(null)
    const { id } = useParams()
    
  
    useEffect(() => {
    async function fetchSinglePlayer() {
     const players = await pullSinglePlayer(id)
     setSinglePlayer(players)
    }
    fetchSinglePlayer()
 }, [])
    if(!player){
    return <h1>Loading</h1>
    } 
    
    return (
      <div className="Details">
        <>
       <h1>Details</h1>
      
          {player && <PlayerCard player={ player } isSingle/>}
        </> 
      </div>
    );
  }