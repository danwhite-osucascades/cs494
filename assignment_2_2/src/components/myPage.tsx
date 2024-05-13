'use client';

import MyTable from '../components/myTable';
import MyFilters from '../components/myFilters';

import { Container } from "@mui/material";
import { useEffect, useState } from 'react';
import MySort from './mySort';

export default function MyPage(props : {jsonData: {title: string, 
    release_year: number,
    director: string,
    genre: string[],
    starring_actors: string[],
    rotten_tomatoes_score: number}[]}){

    const headers: string[] = ["Title", "Year", "Director", "Genre", "Starring", "Score"];
  
    const genres: string[] = new Array<string>;

    const [filterGenre, setFilterGenre] = useState('');
    const [filteredData, setFilteredData] =  useState(props.jsonData);
    const [sortByScore, setSortByScore] = useState(true)

    for (let i = 0; i < props.jsonData.length; i++){
        for (let j = 0; j < props.jsonData[i].genre.length; j++){
            if (!genres.includes(props.jsonData[i].genre[j])){
                genres.push(props.jsonData[i].genre[j]);
            }
        }
    }

    useEffect(()=>{
        //TODO: setFilteredData based on filtered genre
        if (filterGenre.length < 1){
            setFilteredData(props.jsonData)
        }
        setFilteredData(props.jsonData.filter((json_obj) => json_obj.genre.includes(filterGenre)));

        if (sortByScore){
            setFilteredData(filteredData.sort((objA, objB)=> objA.rotten_tomatoes_score - objB.rotten_tomatoes_score))
        } else {
            setFilteredData(filteredData.sort((objA, objB)=> objB.rotten_tomatoes_score - objA.rotten_tomatoes_score))
        }

    }, [filterGenre, sortByScore]);

    // useEffect(()=>{
        
        
    // },[sortByScore])

    return (
        <Container>
            <MyFilters genres={genres} setFilterGenre={setFilterGenre} setSortByScore={setSortByScore}/>
            {/* <MySort scores={scores} setFilterScore={setFilterScore}/> */}
            <MyTable headers={headers} data={filteredData} />
        </Container>

    )
}