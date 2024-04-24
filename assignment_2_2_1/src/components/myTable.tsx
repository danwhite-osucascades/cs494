import { Table } from "@mui/material";
import MyTableHead from "./myTableHead";
import MyTableBody from "./myTableBody";
import { star } from "./myBodyRow"

  
  export default function myTable(props: {headers: string[], data: star[]}){
    return(
    <Table>
        <MyTableHead headers={props.headers}/>
        <MyTableBody data={props.data}/>
    </Table>
  );

  }