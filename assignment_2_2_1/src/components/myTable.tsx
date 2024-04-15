import { Table } from "@mui/material";
import MyTableHead from "./myTableHead";
import MyTableBody from "./myTableBody";
  
  export default function myTable(props: {headers: string[], data: string[][]}){
    return(
    <Table>
        <MyTableHead headers={props.headers}/>
        <MyTableBody data={props.data}/>
  </Table>
  );

  }