import {TableContainer } from "@mui/material";

import MyTable from '../components/myTable';


export default function Home() {

  const headers: string[] = ["Name of Movie", "Year", "Director", "Genre", "Score"];
  
  // TODO Convert the data to objects instead.
  // {title: string, year: string, director: string, genre: string[], score: string}
  // const data: string[][] = [
  //   ["The Dark Knight", "2008", "Christopher Nolan", "Action, Crime, Drama", "94%"],
  //   ["The Shawshank Redemption", "1994", "Frank Darabont", "Drama", "98%"],
  //   ["Inception", "2010", "Christopher Nolan", "Action, Adventure, Sci-Fi", "91%"],
  //   ["Pulp Fiction", "1994", "Quentin Tarantino", "Crime, Drama", "96%"],
  //   ["Forrest Gump", "1994", "Robert Zemeckis", "Drama, Romance", "95%"]
  // ];

  const data: {title: string, year: string, director: string, genre: string[], score: string}[] = [];

  data.push({title: "The Dark Knight", year: "2008", director: "Christopher Nolan", genre: ["Action", "Crime", "Drama"], score: "94%"});

  
  return (
    <main>
      <TableContainer>
        <MyTable headers={headers} data={data} />
      </TableContainer>
    </main>
  );
}