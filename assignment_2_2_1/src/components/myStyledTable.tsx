"use client"
import { styled, TableCell, tableCellClasses, TableRow } from "@mui/material";

export const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`] : {
      backgroundColor: "black",
      color: "white",
      fontSize: 16,
      textAlign: "center"
    },
    [`&.${tableCellClasses.body}`] : {
      fontSize: 14,
      textAlign: "center"
    },
  }));
  
  export const StyledTableRow = styled(TableRow)(()=>({
    "&:nth-of-type(even)":{
      backgroundColor: "#ccc"
    }
  }));