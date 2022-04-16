import { DetailsElements } from "models/DetailsElements";
import { PokemonCardElements } from "models/PokemonCardElements";
import { createContext, useState } from "react";

interface StoreValues {
    login: string,
    setLogin: React.Dispatch<React.SetStateAction<string>>
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
    gender: string,
    setGender: React.Dispatch<React.SetStateAction<string>>
    pokemon: Array<PokemonCardElements>,
    setPokemon: React.Dispatch<React.SetStateAction<PokemonCardElements[]>>,
    details: DetailsElements | null,
    setDetails: React.Dispatch<React.SetStateAction<DetailsElements | null>>
}

interface ProviderProps {
    children: React.ReactNode
}

export const StoreContext = createContext<StoreValues>({} as StoreValues);

export const StoreProvider = (props: ProviderProps) => {

    const [login, setLogin] = useState("")
    const [search, setSearch] = useState("")
    const [gender, setGender] = useState("")
    const [pokemon, setPokemon] = useState<Array<PokemonCardElements>>([])
    const [details, setDetails] = useState<DetailsElements | null>(null)

    return(
        <StoreContext.Provider value={{
            login, setLogin,
            search, setSearch,
            gender, setGender,
            pokemon, setPokemon,
            details, setDetails,
        }}>{props.children}</StoreContext.Provider>
        
    )
}

