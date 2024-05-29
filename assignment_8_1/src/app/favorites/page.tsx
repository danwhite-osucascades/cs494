'use client';

import NavBar from "@/components/navBar"

import AnimalCardFavorite from "@/components/animalCardFavorite";

import { useAnimalsContext } from "@/context/animalsContext";

import { Animal } from "@/types/animal";

export default function Favorites(){
    const { getFavorites } = useAnimalsContext();
    return (
        <div>
            <NavBar />
            <main>
                {
                getFavorites().map((animal: Animal, i: number)=>(
                    <AnimalCardFavorite key={i} animalDetail={animal} />
                ))
                 }
            </main>
        </div>
    )
}