'use client';

import MyTable from '../components/myTable';
import MyFilters from '../components/myFilters';

import { Container } from "@mui/material";
import { useState } from 'react';

export default function MyPage(props : {jsonData: {title: string, 
    release_year: number,
    director: string,
    genre: string[],
    starring_actors: string[],
    rotten_tomatoes_score: number}[]}){

    const headers: string[] = ["Title", "Year", "Director", "Genre", "Starring", "Score"];
  
    const genres: string[] = new Array<string>;

    const [filterGenre, setFilterGenre] = useState('');

    for (let i = 0; i < props.jsonData.length; i++){
        for (let j = 0; j < props.jsonData[i].genre.length; j++){
            if (!genres.includes(props.jsonData[i].genre[j])){
                genres.push(props.jsonData[i].genre[j]);
            }
        }
    }

    return (
        <Container>
            <MyFilters genres={genres} setFilterGenre={setFilterGenre}/>
            <MyTable headers={headers} data={props.jsonData} />
        </Container>

    )
}