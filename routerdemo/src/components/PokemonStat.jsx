import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PokemonStat = props =>{
    const [pokemon, setPokemon] = useState({
        name: "",
        types: [
            {type:{name: ""}}, {type: {name: ""}}
        ],

    })
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/1")
            .then( res => setPokemon(res.data))
            .catch( err => console.log(err))
    }, [])

    return(
        <div>
            <h1>{pokemon.name}</h1>
            <h2>Types:</h2>
            <ul>
                {pokemon.types.map((type, idx)=>{
                    return(
                    <li key={idx}>{type.type.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PokemonStat;