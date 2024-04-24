'use client';

import { Container, Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useState } from 'react';


export default function MyFilters(props: {genres: string[], setFilterGenre: Function}){

    const [genre, setGenre] = useState<string>(props.genres[0]);
    
    function handleChange(event: SelectChangeEvent){
        setGenre(event.target.value as string);
        props.setFilterGenre(event.target.value as string);
    }


    return(
        <Container>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="genre-select-label">Genre</InputLabel>
                    <Select
                    labelId="genre-select-label"
                    id="genre-select"
                    label="Genre"
                    value={genre}
                    onChange={handleChange}
                    >
                        {
                            props.genres.map((genre: string, i: number)=>(
                                <MenuItem key={i} value={genre}>{genre}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Box>
        </Container>
    )
}