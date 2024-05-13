import { NextApiRequest, NextApiResponse } from "next"

import { PokemonDetailed } from '../../types/PokemonDetailed';
import { json } from "stream/consumers";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{pokemon: PokemonDetailed}>
  ) {

    const r = await fetch(req.query.url as string);
    
    const jsonData = await r.json();

    const pokemon: PokemonDetailed = {
      name: jsonData.name,
      height: jsonData.height,
      weight: jsonData.weight,
      abilities: jsonData.abilities.map((x: {ability: {name: string}}) => x.ability.name),
      types: jsonData.types.map((x: {type: {name: string}}) => x.type.name),
      image: jsonData.sprites.other["official-artwork"].front_default

    }
    console.log(pokemon)


    res.status(200).json({ pokemon: pokemon })
  }    