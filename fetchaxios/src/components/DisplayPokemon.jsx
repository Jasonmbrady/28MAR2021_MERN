import React, {useState, useEffect} from 'react';
import axios from 'axios';

const DisplayPokemon = props =>{
    const [pokeDex, setPokeDex] = useState([])
    const [page, setPage] = useState(20);
    useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
        .then( response => setPokeDex(response.data.results))
        .catch( error => console.log(error))
    }, []);

    const clickHandler = e =>{
        e.preventDefault();
        setPage(page + 20);
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=" + page)
        .then( response => setPokeDex(response.data.results))
        .catch( error => console.log(error))
    }

    return(
        <div>
            <button onClick={clickHandler}>Next 20</button>
            {pokeDex.map((pokemon, idx) => {
                return(
                    <div key={idx}>
                        <h1>{pokemon.name}</h1>
                        <p>URL: {pokemon.url}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayPokemon;