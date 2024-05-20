import NavBar from "@/components/navBar"

import { Animal } from "@/types/animal"

import { useState, useEffect } from "react"
import { getDog } from "@/assets/getPet";

export default function Dogs(){
    const [dog, setDog] = useState<Animal | null>(null);
    useEffect(()=>{
        getDog().then((res)=>setDog(res));
    }, []);
    useEffect(()=>{
        console.log(dog);
    }, [dog])
    return (
        <div>
            <NavBar />
            <main>
                DOGS!!!
            </main>
        </div>

    )
}