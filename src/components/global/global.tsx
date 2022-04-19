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
    setDetails: React.Dispatch<React.SetStateAction<DetailsElements | null>>,
    filteredPokemonList: Array<PokemonCardElements>,
    setFilteredPokemonList: React.Dispatch<React.SetStateAction<PokemonCardElements[]>>,
    isFiltering: boolean,
    setIsFiltering: React.Dispatch<React.SetStateAction<boolean>>,
    currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
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
    const [filteredPokemonList, setFilteredPokemonList] = useState<PokemonCardElements[]>([])
    const [isFiltering, setIsFiltering] = useState(false)
    const [currentPage, setCurrentPage] = useState<number>(1);

    return(
        <StoreContext.Provider value={{
            login, setLogin,
            search, setSearch,
            gender, setGender,
            pokemon, setPokemon,
            details, setDetails,
            filteredPokemonList, setFilteredPokemonList,
            isFiltering, setIsFiltering,
            currentPage, setCurrentPage,
        }}>{props.children}</StoreContext.Provider>
        
    )
}

