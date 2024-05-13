'use client';

import { useState, useEffect } from 'react';

import { Button, TextField, Typography } from "@mui/material";

import { Pokemon } from '../types/Pokemon';

export default function Home() {

  // try to send a request to /api/hello
  // and get the data back as a json

  const [pokemon, setPokemon] = useState<Pokemon[]>([]);


  useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);


  useEffect(()=>{
    fetch('/api/pokemon')
    .then(response => response.json())
    .then(json => setPokemon(json.pokemon))
    .catch(error => console.error(error));
  }, []);

  return (
    <main>
     <table>
      <thead>
        <tr>
          <th>Name (and that's all) :( </th>
        </tr>
      </thead>
      <tbody>
          {
            pokemon.map((data: Pokemon, i: number)=>(
              <tr key={i}>
                <td>
                  {data.name}
                </td>
              </tr>
            ))
          }
      </tbody>
     </table>
      
    </main>
  );
}
