import { Container } from "./styles";
import { useContext } from "react";
import { StoreContext } from "../global/global";
import grasspng from "../../assets/grass.png"
import { PokemonListResults } from "models/PokemonListResults";

export const Header = () => {
    const { search, setSearch, setFilteredPokemonList, setIsFiltering, setCurrentPage, setLoading } = useContext(StoreContext);
    
    function handleOnChange (event: React.ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value.toLowerCase())
    }

    const getPokemonForm = (limit: number, offset: number) => {
        return fetch(
            `https://pokeapi.co/api/v2/pokemon-form?limit=${limit}&offset=${offset}`
        );
    };

    async function handleSearch (search: string) {
        setLoading(true)
        if(search === ""){
            console.error("campo de busca esta vazio")
            return
        }
        const jsonResponse = await getPokemonForm(1126, 0);
        const { results }: {results: Array<PokemonListResults> } = await jsonResponse.json();
        const filteredByName = results.filter((item) => { return item.name.includes(search) });
        const filteredPokemonForms = await Promise.all(filteredByName.map((item) => {
            return fetch(item.url) 
        }))
        const pokemonFormsJson = await Promise.all(filteredPokemonForms.map((item) => item.json()))
        setFilteredPokemonList(pokemonFormsJson)
        setIsFiltering(true)
        setCurrentPage(1)
        setLoading(false)
    }

    return(
        <Container>
            <p>Welcome, let's start the search!</p>
            <div>
                <input placeholder="Search for your pokémon" value={ search } onChange={ handleOnChange }
                onKeyPress={(e) => e.key === "Enter" && handleSearch(search)}></input>
                <button onClick={ () => handleSearch(search) }><img src={ grasspng } alt="Search" /></button>
            </div>
        </Container>  
    )
}