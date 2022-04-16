import { Container } from "./styles";
import React, { useContext, useEffect } from "react";
import { StoreContext } from "../global/global";
import grasspng from "../../assets/grass.png"
import { PokemonList } from "../pokemonlist";

export const Header = () => {
    const { login, search, setSearch, pokemon, setPokemon } = useContext(StoreContext);

    
    function handleOnChange (event: React.ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value.toLowerCase())
    }

    return(
        <Container>
            <p>Welcome {login}, let's start the search!</p>
            <div>
                <input placeholder="Search for your pokémon" onChange={ handleOnChange }></input>
                <button><img src={grasspng} /></button>
            </div>
        </Container>  
    )
}