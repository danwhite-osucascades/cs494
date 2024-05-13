'use client'

import { Container, Select} from "@mui/material"
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";


export default function MyFilters(props:{genres: string[], setFilterGenre: Function}){


    const [genre, setGenre] = useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {
      setGenre(event.target.value as string);
      props.setFilterGenre();
    };
  
    return (
      <Container>
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="genre-select-label">Genre</InputLabel>
          <Select
            labelId="genre-select-label"
            id="genre-select"
            value={genre}
            label="Genre"
            onChange={handleChange}>
            {
                props.genres.map((genre:string, i: number) => (
                    <MenuItem key={i} value={genre}>{genre}</MenuItem>
                ))
            }
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="score-select-label">Score</InputLabel>
          <Select
            labelId="score-select-label"
            id="score-select"
            value={genre}
            label="Score"
            onChange={handleChange}>
            {
                props.genres.map((genre:string, i: number) => (
                    <MenuItem key={i} value={genre}>{genre}</MenuItem>
                ))
            }
          </Select>
        </FormControl>
      </Box>


      </Container>
      
    );
}