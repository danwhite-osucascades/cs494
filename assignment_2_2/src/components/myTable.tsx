'use client';

import { Table, TableHead, TableBody, TableRow, TableCell} from "@mui/material";

import MyTableHead from "./myTableHead";
import MyTableBody from "./myTableBody";

export default function MyTable(props: {headers: string[], data:  {title: string, year: string, director: string, genre: string[], score: string}[]}){
    
      
    return (
        <Table>
            <MyTableHead headers={props.headers}/>
            <MyTableBody data={props.data} />
        </Table>
    )

}