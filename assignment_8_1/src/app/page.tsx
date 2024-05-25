'use client';

import NavBar from "@/components/navBar";
import { useAnimalsContext } from "@/context/animalsContext";
import { useEffect } from "react";
export default function Home() {

  const { animals } = useAnimalsContext();

  useEffect(()=>{
    console.log(animals)
  }, [animals])

  return (
      <main>
        <NavBar />
      Hello World!
      </main>

  );
}
