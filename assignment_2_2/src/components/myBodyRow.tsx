import { StyledTableRow, StyledTableCell } from "./myStyledTable";

export default function MyBodyRow(props: {data:  {title: string, year: string, director: string, genre: string[], score: string}}){
        return(
          <StyledTableRow>
            <StyledTableCell>{props.data.title}</StyledTableCell>
            <StyledTableCell>{props.data.year}</StyledTableCell>
            <StyledTableCell>{props.data.director}</StyledTableCell>
            <StyledTableCell>{props.data.genre.join(", ")}</StyledTableCell>
            <StyledTableCell>{props.data.score}</StyledTableCell>
          </StyledTableRow>
        )
}