import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PokemonPic = props =>{
    const [pokemon, setPokemon] = useState({
        name:"",
        sprites: {
            front_default: ""
        }
    })
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/1")
            .then( res => setPokemon(res.data))
            .catch( err => console.log(err));
    },[])
    return(
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt="" height="450px" width="450px"/>
        </div>
    )
}

export default PokemonPic;