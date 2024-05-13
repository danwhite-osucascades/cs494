'use client';

import { Container, Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useState } from 'react';


export default function MySort(props: {scores: string[], setFilterScore: Function}){

    const [score, setScore] = useState<string>(props.scores[0]);
    
    function handleChange(event: SelectChangeEvent){
        setScore(event.target.value as string);
        props.setFilterScore(event.target.value as string);
    }


    return(
        <Container>
            <Box sx={{ minWidth: 120 }}>
                <FormControl size="small">
                    <InputLabel id="score-select-label">Score</InputLabel>
                    <Select
                    labelId="score-select-label"
                    id="score-select"
                    label="Score"
                    value={score}
                    onChange={handleChange}
                    >
                        {
                            props.scores.map((score: string, i: number)=>(
                                <MenuItem key={i} value={score}>{score}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Box>
        </Container>
    )
}