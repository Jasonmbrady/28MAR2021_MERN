import React, {useState, useEffect} from 'react';
import axios from 'axios';

const OnePokemon = props =>{
    const [number, setNumber] = useState(1)
    const [pokemon, setPokemon] = useState({
        name: "",
        sprites: {
            front_default: ""
        }
    });
    
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/" + number)
            .then(res => setPokemon(res.data))
            .catch( err => console.log(err))
    }, [number])
    const nextHandler = e =>{
        e.preventDefault();
        setNumber(number + 1);
    }
    const prevHandler = e =>{
        e.preventDefault();
        setNumber(number - 1);
    }

    return(
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.front_default} alt="" style={{height: "300px", width: "300px"}}/>
            <button onClick={prevHandler}>Prev</button>
            <button onClick={nextHandler}>Next</button>

        </div>
    )
}

export default OnePokemon;