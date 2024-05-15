'use client';

import { useState, useEffect } from 'react';

import { Button, 
      TextField, 
      Typography,
      FormControl,
      InputLabel,
      Select,
      MenuItem,
      SelectChangeEvent,
      Card,
      CardActions,
      CardContent,
      CardMedia,
      Box
 } from "@mui/material";

import { Pokemon } from '../types/Pokemon';
import { PokemonDetail } from '../types/PokemonDetail';
import PokemonCard from '@/components/PokemonCard';
import PokemonSelect from '@/components/PokemonSelect';

export default function Home() {

  // try to send a request to /api/hello
  // and get the data back as a json

  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState<string>("");
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail | null >(null);

  

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

      {
        pokemon.length > 0 ?
        <PokemonSelect pokemon={pokemon} setSelectedPokemonUrl={setSelectedPokemonUrl}></PokemonSelect>

          : <div/>
      }

      { pokemonDetail ? 
      <Box>
        <PokemonCard pokemon={pokemonDetail}></PokemonCard>
      </Box>

        : <div/>
        }
  </main>

  );
      }
