import { Container } from "./styles";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../global/global";
import grasspng from "../../assets/grass.png"
import { PokemonList } from "../pokemonlist";
import { PokemonCardElements } from "models/PokemonCardElements";
import { json } from "stream/consumers";
import { PokemonListResults } from "models/PokemonListResults";

export const Header = () => {
    const { login, search, setSearch, setFilteredPokemonList, setIsFiltering, setCurrentPage } = useContext(StoreContext);
    
    function handleOnChange (event: React.ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value.toLowerCase())
    }

    const getPokemonForm = (limit: number, offset: number) => {
        return fetch(
            `https://pokeapi.co/api/v2/pokemon-form?limit=${limit}&offset=${offset}`
        );
    };

    async function handleSearch (search: string) {
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
    }

    return(
        <Container>
            <p>Welcome {login}, let's start the search!</p>
            <div>
                <input placeholder="Search for your pokémon" value={ search } onChange={ handleOnChange }></input>
                <button onClick={ () => handleSearch(search) }><img src={ grasspng } /></button>
            </div>
        </Container>  
    )
}