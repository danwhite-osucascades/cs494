import NavBar from "@/components/navBar"

import { Animal } from "@/types/animal";

import { getCat } from "@/assets/getPet";
import { useState, useEffect } from 'react';

export default function Cats(){
    const [cat, setCat] = useState<Animal | null>(null);

    useEffect(()=>{getCat().then((res)=>setCat(res))},[])
    useEffect(()=>{console.log(cat)},[cat]);
    return (
        <div>
            <NavBar />
            <main>
                CATS!!!
            </main>
        </div>

    )
}