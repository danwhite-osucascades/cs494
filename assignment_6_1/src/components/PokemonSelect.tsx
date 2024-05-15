import pokemon from "@/pages/api/pokemon";
import { Pokemon } from "@/types/Pokemon";
import { FormControl, InputLabel, Select, SelectChangeEvent, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";


export default function PokemonSelect(props: {pokemon: Pokemon[], setSelectedPokemonUrl: Function}){
    const [selectedPokemon, setSelectedPokemon] = useState<string>(props.pokemon[0].name);

    useEffect(() => {
        if (props.pokemon.length > 0){
          setSelectedPokemon(props.pokemon[0].name);
        }
        
      }, [pokemon]);

return(
    <FormControl fullWidth>
        <InputLabel id="pokemon-select-label">Pokemon</InputLabel>
        <Select
          labelId="pokemon-select-label"
          id="pokemon-select"
          value={selectedPokemon}
          label="Pokemon"
          onChange={(event: SelectChangeEvent, child: any)=>{
            console.log(child.props["data-id"])
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