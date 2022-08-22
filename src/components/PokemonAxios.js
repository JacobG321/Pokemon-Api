import React, {useState, useEffect} from 'react';
import axios from 'axios';


const PokemonAxios = () => {
    const [pokemon, setPokemon] = useState([]);
 
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response=>{setPokemon(response.data.results)})
            // repsonse.data gives back a object from the api, results is the name of the list
            // console log results to see what its called
    }, []);

    return (
        <div>
            <h1>Axios Pokemon</h1>
            <div>
            {pokemon && pokemon.map((pokeman, index)=>{
                return (<div key={index}>{pokeman.name}</div>)
            })}
        </div>
        </div>
    )
}

export default PokemonAxios