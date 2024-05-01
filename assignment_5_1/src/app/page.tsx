'use client';

import MyForm  from '../components/myForm';
import MyTable from '../components/myTable';

import { useState, useEffect } from 'react';

export default function Home() {

  const [entries, setEntries] = useState<{name: string, language: string, comment: string, rating: number}[]>([]);

  function addEntry(entry: {name: string, language: string, comment: string, rating: number}){
    // Imagine we get an entry:
    // {name: "Dan", language: "Python", comment: "Cool"}
    setEntries([...entries, entry]);
  }

  function deleteEntry(index: number){
    // figure out how to delete from the array by index number
    // .filter() potentially?
    // call setEntries
    const tmpEntries = entries.filter((entry, i)=> i != index);
    // const tmpEntries = [...entries];
    // tmpEntries.splice(index, 1);
    setEntries(tmpEntries);
    
  }

  // make sure entries are properly updated with useEffect
  useEffect(()=>{console.log(entries)}, [entries])

  return (
    <main>
      Hello World
      <MyForm addEntry={addEntry} />
      <MyTable entries={entries} deleteEntry={deleteEntry} />

    </main>
  );
}
