'use client';

import { useState, useEffect } from 'react';

import { Button, FormControl, FormHelperText, InputLabel, Menu, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";

import { Pokemon } from '../types/Pokemon';
import { PokemonDetailed } from '../types/PokemonDetailed';

export default function Home() {

  // try to send a request to /api/hello
  // and get the data back as a json

  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<string>("");
  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState<string>("");
  const [pokemonDetailed, setPokemonDetailed] = useState<PokemonDetailed | null>(null);

  useEffect(() => {
    console.log(pokemon);
    if (pokemon.length > 0){
      setSelectedPokemon(pokemon[0].name)
    }
    
  }, [pokemon]); // runs on initial load and re-renders/

  useEffect(() => {
    console.log(pokemonDetailed)
  }, [pokemonDetailed])

  useEffect(()=>{
    fetch('/api/pokemon')
    .then(response => response.json())
    .then(json => setPokemon(json.pokemon))
    .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    if (selectedPokemonUrl.length > 0){
      fetch(`/api/pokemonDetailed?url=${selectedPokemonUrl}`)
      .then(response => response.json())
      .then(json => setPokemonDetailed(json.pokemon))
      .catch(error => console.error(error));
    }
  }, [selectedPokemonUrl]); // runs on initial load and re-renders/


  function handleSelect(event: SelectChangeEvent){
    console.log(event.target.value)
  }

  return (
    <main>
     <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
      <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="pokemon-select-label">Pokemon</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="pokemon-select-label"
          value={selectedPokemon}
          onChange={(event) => {
            setSelectedPokemon(event.target.value);
            setSelectedPokemonUrl(pokemon.filter((obj) => obj.name == event.target.value)[0].url);
          }}
          autoWidth
          label="Pokemon"
        >
          {
            pokemon.map((data: Pokemon, i: number)=>(
              <MenuItem key={i} value={data.name}>{data.name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </div>
      </tbody>
     </table>
      
    </main>
  );
}
