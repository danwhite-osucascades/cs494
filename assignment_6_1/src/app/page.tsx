'use client';

import { useState, useEffect } from 'react';

import { Pokemon } from '../types/Pokemon';
import { PokemonDetail } from '../types/PokemonDetail';

import SelectForm from '../components/selectForm';
import PokemonCard from '@/components/pokemonCard';

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
        <SelectForm pokemon={pokemon} setSelectedPokemonUrl={setSelectedPokemonUrl}/>
        : 
        <div/>
      }
       {
        pokemonDetail ?
          <PokemonCard pokemonDetail={pokemonDetail}/>
            :
            <div />
          }
  </main>
  );
}
