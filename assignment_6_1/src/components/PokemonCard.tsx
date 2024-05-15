import pokemonDetail from "@/pages/api/pokemonDetail";
import { PokemonDetail } from "@/types/PokemonDetail";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";


export default function PokemonCard(props: {pokemon: PokemonDetail}){

    return(
        <Card sx={{ maxWidth: 345, m:2 }}>
          <CardMedia
            sx={{ height: 140, p:10 }}
            image={props.pokemon.image}
            title={props.pokemon.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.pokemon.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.pokemon.abilities.join(", ")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              types: {props.pokemon.types.join(", ")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              height: {props.pokemon.height}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              weight: {props.pokemon.weight}
            </Typography>
          </CardContent>
        </Card>
    )


}