import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PokemonCard = ({pokemonUrl}) => {
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(pokemonUrl)
    .then((res => setPokemon(res.data)))
    .catch((err) => console.log(err))
  } , [])

  return (
    <article>
      <div>
        <img src={pokemon?.sprites.other.dream_world.front_default} alt="" />
        <h3>{pokemon?.name}</h3>
      </div>
    </article>
  )
}

export default PokemonCard