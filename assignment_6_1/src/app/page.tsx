'use client';

import { useState, useEffect } from 'react';

import { Button, 
      TextField, 
      Typography,
      FormControl,
      InputLabel,
      Select,
      MenuItem
 } from "@mui/material";

import { Pokemon } from '../types/Pokemon';
import { PokemonDetail } from '../types/PokemonDetail';

export default function Home() {

  // try to send a request to /api/hello
  // and get the data back as a json

  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<string>("");
  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState<string>("");
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail | null >(null);

  useEffect(() => {
    if (pokemon.length > 0){
      setSelectedPokemon(pokemon[0].name);
    }
    
  }, [pokemon]);

  useEffect(() => {
    console.log(pokemonDetail);
    
  }, [pokemonDetail]);

  useEffect(() => {
    if (selectedPokemonUrl.length > 0){
      fetch(`/api/pokemonDetail?url=${selectedPokemonUrl}`)
      .then(response => response.json())
      .then(json => setPokemonDetail(json.pokemon))
      .catch(error => console.error(error));
    }
  }, [selectedPokemonUrl]);


  useEffect(()=>{
    fetch('/api/pokemon')
    .then(response => response.json())
    .then(json => setPokemon(json.pokemon))
    .catch(error => console.error(error));
  }, []);

  return (
    <main>
     <FormControl fullWidth>
        <InputLabel id="pokemon-select-label">Pokemon</InputLabel>
        <Select
          labelId="pokemon-select-label"
          id="pokemon-select"
          value={selectedPokemon}
          label="Pokemon"
          onChange={(event)=>{
            setSelectedPokemon(event.target.value);
            setSelectedPokemonUrl(pokemon.filter((obj)=>obj.name == event.target.value)[0].url);
          }}
        > 
        {pokemon.map((data: Pokemon, i: number)=>(
          <MenuItem key={i} data-url={data.url} value={data.name}>{data.name}</MenuItem>
        ))}
          
        </Select>
      </FormControl>

  </main>
  );
}
