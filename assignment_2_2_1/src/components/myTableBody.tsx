import { TableBody } from "@mui/material";
import MyBodyRow from "./myBodyRow";
import { star } from "./myBodyRow"


export default function MyTableBody(props:{data: star[]} ){

  return(
    <TableBody>
          {props.data.map((data: star) => (
            <MyBodyRow data={data}/>
          ))}
    </TableBody>
  )
}