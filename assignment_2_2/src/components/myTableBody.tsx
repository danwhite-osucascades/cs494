import { TableBody } from "@mui/material";
import MyBodyRow from './myBodyRow';

export default function MyTableBody(props: {data:  {title: string, year: string, director: string, genre: string[], score: string}[]}){
    // TODO: This component doesn't actually use the data. It's just passing it to the child components... oh well, someone else can fix it.
   
    return(
        <TableBody>
            {
                props.data.map((data:  {title: string, year: string, director: string, genre: string[], score: string}, i: number)=>(
                    <MyBodyRow key={i} data={data}/>
                ))
            }
        </TableBody>
    )
}