const BASEURL = 'https://fsa-puppy-bowl.herokuapp.com/api/2401-ftb-mt-web-pt'
async function pullPlayers() {
    try {
    const processing = await fetch(`${BASEURL}/players`)
    const result = await processing.json()
    console.log(result.data.players)
    return result.data.players

  } catch (error){
    console.error('Error pulling players', error)
  }
}
async function pullSinglePlayer(id){
    try {
        const response = await fetch(`${BASEURL}/players/${id}`)
        const result = await response.json()
        return result.data.player
    } catch (error) {
        console.error('Error', error)
    }

}

export { pullPlayers, pullSinglePlayer }