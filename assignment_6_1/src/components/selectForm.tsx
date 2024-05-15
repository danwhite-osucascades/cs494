import { 
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
} from "@mui/material";

import { useState } from 'react';

import { Pokemon } from "@/types/Pokemon";

export default function SelectForm(props: {pokemon: Pokemon[], setSelectedPokemonUrl: Function}){
    const [selectedPokemon, setSelectedPokemon] = useState<string>(props.pokemon[0].name);
    
    return (
        <FormControl fullWidth>
        <InputLabel id="pokemon-select-label">Pokemon</InputLabel>
        <Select
          labelId="pokemon-select-label"
          id="pokemon-select"
          value={selectedPokemon}
          label="Pokemon"
          onChange={(event: SelectChangeEvent, child: any)=>{
            // console.log(child.props["data-id"]);
            setSelectedPokemon(event.target.value);
            props.setSelectedPokemonUrl(props.pokemon[child.props["data-id"]].url);
          }}
        > 
        {props.pokemon.map((data: Pokemon, i: number)=>(
          <MenuItem key={i} data-id={i} value={data.name}>{data.name}</MenuItem>
        ))}
          
        </Select>
      </FormControl>
    )
}