import { StyledTableRow, StyledTableCell } from "./myStyledTable";

export type star = {
  name: string,
  distance_from_earth_ly: number,
  size: string,
  mass: string,
  temperature: string,
  type: string
}

export default function MyBodyRow(props: {data: star}){
        return(
          <StyledTableRow>
                <StyledTableCell>{props.data.name}</StyledTableCell>
                <StyledTableCell>{props.data.distance_from_earth_ly}</StyledTableCell>
                <StyledTableCell>{props.data.size}</StyledTableCell>
                <StyledTableCell>{props.data.mass}</StyledTableCell>
                <StyledTableCell>{props.data.temperature}</StyledTableCell>
                <StyledTableCell>{props.data.type}</StyledTableCell>
          </StyledTableRow>
        )
}


