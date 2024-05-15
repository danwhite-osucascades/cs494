import {
    Typography,
    Card,
    CardMedia,
    Box,
    CardContent,
    Container,
} from "@mui/material";

import { PokemonDetail } from "@/types/PokemonDetail";
export default function PokemonCard(props: {pokemonDetail: PokemonDetail}){
    return (
        <Container sx={{width: 600, m: 2}}>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                component="img"
                sx={{ width: 151, p: 2 }}
                image={props.pokemonDetail.image}
                alt={`${props.pokemonDetail.name} image`}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography sx={{textTransform: "capitalize"}} component="div" variant="h5">
                        {props.pokemonDetail.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                        type: {props.pokemonDetail.types.join(", ")}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        abilities: {props.pokemonDetail.abilities.join(", ")}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        height: {props.pokemonDetail.height/10}m
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        weight: {props.pokemonDetail.weight/10}kg
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Container>
    )

}