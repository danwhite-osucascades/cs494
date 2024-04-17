
import { promises as fs } from "fs";
import MyTable from "@/components/myTable";
import { TableContainer } from "@mui/material";
import { star } from "@/components/myBodyRow";
// TODO: check for unused imports and clean up. no more than 2 lines between code + functions.

export default async function Home() {
  const fileData = await fs.readFile(process.cwd() + "/src/data/star_data.json", "utf8")
const star_data: star[] =  JSON.parse(fileData)

const headers: string[] = ["Name", "Distance from Earth", "Size", "Mass", "Temperature", "Type"];

  // const data: string[][] = [
  //   ["The Dark Knight", "2008", "Christopher Nolan", "Action, Crime, Drama", "94%"],
  //   ["The Shawshank Redemption", "1994", "Frank Darabont", "Drama", "98%"],
  //   ["Inception", "2010", "Christopher Nolan", "Action, Adventure, Sci-Fi", "91%"],
  //   ["Pulp Fiction", "1994", "Quentin Tarantino", "Crime, Drama", "96%"],
  //   ["Forrest Gump", "1994", "Robert Zemeckis", "Drama, Romance", "95%"]
  // ];

  return (
    <main>
      <TableContainer>
        <MyTable headers={headers} data={star_data}></MyTable>
      </TableContainer>
    </main>
  );
}