import { Container, TableContainer } from "@mui/material";
import myTable from "./myTable";
import MyFilters from "./myFilters";
import MyTable from "./myTable";
import { movie } from "./myBodyRow";
import { useState } from "react";

export default function MyPage(props:{movie_data: movie[]}){

    const headers: string[] = ["Title", "Release Year", "Director", "Genre", "Actors", "Score"];
    const genres: string[] = [];
    const [filterGenre, setFilterGenre] = useState('');

    for (let i = 0; i < props.movie_data.length; i++){
      for (let j = 0; j < props.movie_data[i].genre.length; j++) {
        if (!genres.includes(props.movie_data[i].genre[j])){
          genres.push(props.movie_data[i].genre[j]);
        }
      }
    }

    return(
        <Container>
            <MyFilters genres={genres} setFilterGenre={setFilterGenre}/>
            <TableContainer>
                <MyTable headers={headers} data={props.movie_data}></MyTable>
            </TableContainer>
        </Container>
    )
}