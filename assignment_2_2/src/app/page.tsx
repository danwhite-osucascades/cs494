'use client';

import {TableContainer,
        Table,
        TableHead,
        TableBody,
        TableRow,
        TableCell } from "@mui/material";

import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`] : {
    backgroundColor: "black",
    color: "white",
    fontSize: 16,
    textAlign: "center"
  },
  [`&.${tableCellClasses.body}`] : {
    fontSize: 14,
    textAlign: "center"
  },
}));

const StyledTableRow = styled(TableRow)(()=>({
  "&:nth-of-type(even)":{
    backgroundColor: "#ccc"
  }
}));

export default function Home() {
  console.log("hello")
  const headers: string[] = ["Name of Movie", "Year", "Director", "Audience", "Score"];

  const data: string[][] = [
    ["The Dark Knight", "2008", "Christopher Nolan", "Action, Crime, Drama", "94%"],
    ["The Shawshank Redemption", "1994", "Frank Darabont", "Drama", "98%"],
    ["Inception", "2010", "Christopher Nolan", "Action, Adventure, Sci-Fi", "91%"],
    ["Pulp Fiction", "1994", "Quentin Tarantino", "Crime, Drama", "96%"],
    ["Forrest Gump", "1994", "Robert Zemeckis", "Drama, Romance", "95%"]
  ];

  function HeaderRow(){
    return(
      <StyledTableRow>
        <StyledTableCell>{headers[0]}</StyledTableCell>
        <StyledTableCell>{headers[1]}</StyledTableCell>
        <StyledTableCell>{headers[2]}</StyledTableCell>
        <StyledTableCell>{headers[3]}</StyledTableCell>
        <StyledTableCell>{headers[4]}</StyledTableCell>
      </StyledTableRow>
    )
  }

  function bodyRow(rowNum: number){
    return(
      <StyledTableRow>
        <StyledTableCell>{data[rowNum][0]}</StyledTableCell>
        <StyledTableCell>{data[rowNum][1]}</StyledTableCell>
        <StyledTableCell>{data[rowNum][2]}</StyledTableCell>
        <StyledTableCell>{data[rowNum][3]}</StyledTableCell>
        <StyledTableCell>{data[rowNum][4]}</StyledTableCell>
      </StyledTableRow>
    )

  }

  
  return (
    <main>
      <TableContainer>
        <Table>
          <TableHead>
            <HeaderRow/>
          </TableHead>
          <TableBody>
            {bodyRow(0)}
            {bodyRow(1)}
            {bodyRow(2)}
            {bodyRow(3)}
            {bodyRow(4)}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  );
}