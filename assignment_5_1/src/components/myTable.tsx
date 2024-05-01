import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Button,
    Rating
} from "@mui/material";

export default function MyTable(props: {entries: {name: string, language: string, comment: string, rating: number}[], deleteEntry: Function}){

    // function handleClick(event: React.MouseEvent<HTMLButtonElement>){
    //     props.deleteEntry(event.currentTarget.value);
    // }

    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Name
                        </TableCell>
                        <TableCell>
                            Language
                        </TableCell>
                        <TableCell>
                            Comment
                        </TableCell>
                        <TableCell>
                            Delete
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.entries.map((entry, i)=>(
                            <TableRow key={i}>
                                <TableCell>
                                    {entry.name}
                                </TableCell>
                                <TableCell>
                                    {entry.language}
                                </TableCell>
                                <TableCell>
                                    {entry.comment}
                                </TableCell>
                                <TableCell>
                                    <Rating 
                                    value={entry.rating}
                                    readOnly
                                    />
                                    
                                </TableCell>
                                <TableCell>
                                    <Button onClick={()=>{props.deleteEntry(i)}}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}