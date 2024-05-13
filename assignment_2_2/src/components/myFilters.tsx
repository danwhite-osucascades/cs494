'use client';

import { Container, Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Menu } from "@mui/material";
import { useEffect, useState } from 'react';


export default function MyFilters(props: {genres: string[], setFilterGenre: Function, setSortByScore: Function}){

    const [genre, setGenre] = useState<string>(props.genres[0]);
    const [sortByScore, setSortByScore] = useState("High To Low");
    
    function handleChange(event: SelectChangeEvent){
        setGenre(event.target.value as string);
        props.setFilterGenre(event.target.value as string);
    }

    function handleScoreChange(event: SelectChangeEvent){
        setSortByScore(event.target.value);
        if (event.target.value == "High To Low"){
            props.setSortByScore(true)
        } else {
            props.setSortByScore(false);
        }
        console.log(sortByScore)
    }

    useEffect(()=>{},[sortByScore])


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
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="score-select-label">Sort By Score</InputLabel>
                    <Select
                    labelId="score-select-label"
                    id="score-select"
                    label="Sort By Score"
                    value={sortByScore}
                    onChange={handleScoreChange}
                    >
                        <MenuItem value="High To Low">High To Low</MenuItem>
                        <MenuItem value="Low To High">Low To High</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Container>
    )
}