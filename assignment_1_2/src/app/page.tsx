export default function Home() {
  
  function headerPlusList(){
    return(
      <div>
      <h1>This is a list</h1>
      <p>This is a paragraph</p>
      <img src="https://live.staticflickr.com/2400/2059939514_3bd36f6fa2_w.jpg"/>
      </div>

    )
  }
  
  function tableHead(cell1: string, cell2: string, cell3: string){
    return(<thead>
      <tr>
        <th>
          {cell1}
        </th>
        <th>
         {cell2}
        </th>
        <th>
          {cell3}
        </th>
      </tr>
    </thead>)
  }
  return (
    <main>
     <h1>
      My Header
     </h1>
     <table>
      {tableHead("head 1", "head 2", "head 3")}
      <tbody>
      <tr>
          <td>
            body 1
          </td>
          <td>
            body 2
          </td>
          <td>
            body 3
          </td>
        </tr>
      </tbody>
     </table>


    </main>
  );
}
