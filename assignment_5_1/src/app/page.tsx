'use client';

import MyForm  from '../components/myForm';

import { useState, useEffect } from 'react';

export default function Home() {

  const [entries, setEntries] = useState<{name: string, language: string, comment: string}[]>([]);

  function addEntry(entry: {name: string, language: string, comment: string}){
    // Imagine we get an entry:
    // {name: "Dan", language: "Python", comment: "Cool"}
    setEntries([...entries, entry]);
  }

  // make sure entries are properly updated with useEffect
  useEffect(()=>{console.log(entries)}, [entries])

  return (
    <main>
      Hello World
      <MyForm addEntry={addEntry} />

    </main>
  );
}
