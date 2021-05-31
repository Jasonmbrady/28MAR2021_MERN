import React, {useState, useEffect} from 'react';

const DisplayPokemon = props =>{
    const [pokeDex, setPokeDex] = useState([])
    const [page, setPage] = useState(0);
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then( res => res.json())
            .then( res => setPokeDex(res.results))
            .catch( err => console.log(err))
    }, []);

    const clickHandler = e =>{
        e.preventDefault();
        setPage(page + 20);
        fetch("https://pokeapi.co/api/v2/pokemon?offset=" + page)
            .then( res => res.json())
            .then( res => setPokeDex(res.results))
            .catch( err => console.log(err))
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