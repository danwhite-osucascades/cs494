import { TableBody } from "@mui/material";
import MyBodyRow from "./myBodyRow";

export default function MyTableBody(props:{data: string[][]} ){

  return(
    <TableBody>
        {props.data.map((data: string[], i: number) => (
            <MyBodyRow key={i} data={data}/>
        ))}
    </TableBody>
  )
}