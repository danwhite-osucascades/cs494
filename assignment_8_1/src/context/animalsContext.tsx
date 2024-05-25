'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

import { Animal } from '@/types/animal';

import { getAnimals } from '@/assets/getPet';


interface animalContextProps {
    animals: Animal[],
    cats: Animal[],
    dogs: Animal[]

}

const AnimalsContext = createContext<animalContextProps>({
    animals: [],
    dogs: [],
    cats: []
})

export function AnimalsContextProvider({children}: {children: ReactNode}){
    const [animals, setAnimals] = useState<Animal[]>([]);
    const [cats, setCats] = useState<Animal[]>([]);
    const [dogs, setDogs] = useState<Animal[]>([]);

    const catCount = 5;
    const dogCount = 5;
    
    useEffect(()=>{
        console.log(animals);
        setCats(getCats());
        setDogs(getDogs());
    },[animals])

    useEffect(()=>{
        if (animals.length == 0){
            initAnimals();
        }
    },[])

    function initAnimals(){
        getAnimals(catCount, dogCount).then((res)=>setAnimals(res));
    }

    function getDogs(){
        console.log(animals);
        return animals.filter((animal: Animal)=>animal.type == "dog");
    }

    function getCats(){
        return animals.filter((animal)=>animal.type == "cat");
    }
    


    return (
        <AnimalsContext.Provider value={{animals: animals, cats: cats, dogs: dogs}}>
            {children}
        </AnimalsContext.Provider>
    )
}

export function useAnimalsContext(){
    return useContext(AnimalsContext);
}