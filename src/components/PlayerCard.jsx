import React from "react";
import {useNavigate} from 'react-router-dom'

function PlayerCard({ player, isSingle }) {
    const navigate = useNavigate()
    
    function handleClick() {
        if (isSingle) {
            navigate(`/home`)
        } else {
        navigate(`/player/${player.id}`)
    }
}

    console.log(isSingle)
    return (
        <>
        <img src={player.imageUrl}></img>
        <h1>{player.name}</h1>
        <h2>{player.breed}</h2>
       {isSingle ? <button onClick={handleClick}>Go Back</button> : <button onClick={handleClick}>See Details</button>}
        <h2>{player.status}</h2>
        </>
    )
}

export default PlayerCard