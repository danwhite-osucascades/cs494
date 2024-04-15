'use client';

import MyTable from "@/components/myTable";
import {TableContainer } from "@mui/material";
// TODO: check for unused imports and clean up. no more than 2 lines between code + functions.

export default function Home() {
  console.log("hello") // TODO: remove logging

  // TODO: exctact the data to outside file and/or db.

  const headers: string[] = ["Name of Movie", "Year", "Director", "Audience", "Score"];
  const data: string[][] = [
    ["The Dark Knight", "2008", "Christopher Nolan", "Action, Crime, Drama", "94%"],
    ["The Shawshank Redemption", "1994", "Frank Darabont", "Drama", "98%"],
    ["Inception", "2010", "Christopher Nolan", "Action, Adventure, Sci-Fi", "91%"],
    ["Pulp Fiction", "1994", "Quentin Tarantino", "Crime, Drama", "96%"],
    ["Forrest Gump", "1994", "Robert Zemeckis", "Drama, Romance", "95%"]
  ];

  return (
    <main>
      <TableContainer>
        <MyTable headers={headers} data={data}></MyTable>
      </TableContainer>
    </main>
  );
}