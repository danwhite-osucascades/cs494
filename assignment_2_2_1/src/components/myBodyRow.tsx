import { StyledTableRow, StyledTableCell } from "./myStyledTable";

export default function MyBodyRow(props: {data: string[]}){
        return(
          <StyledTableRow>
            {props.data.map((data: string, i: number) => (
                <StyledTableCell key={i}>{data}</StyledTableCell>
            ))}
          </StyledTableRow>
        )
}


