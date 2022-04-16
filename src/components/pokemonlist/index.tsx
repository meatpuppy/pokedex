import { Container, PokemonCard } from "./styles";
import React, { useContext } from "react";
import { StoreContext } from "../global/global";
import chargif from "../../assets/chargif.webp"
import ballpng from "../../assets/ball.png"

export function PokemonList () {
    const { pokemon, setDetails } = useContext(StoreContext)

    const showDetails = (url: string) => {
        fetch(url)
        .then((response) => { return response.json() })
        .then((response) => { setDetails(response) })
    };

    return(
        <Container>
            {pokemon.map((item) => {
                return(
                    <PokemonCard key={item.id}>
                        <div className="card">
                            <img src={ballpng}></img>
                            <p>{item.name.toUpperCase()}</p>
                        </div>
                        <img src={item.sprites.front_default}></img>
                        <button onClick={() => {showDetails(item.pokemon.url)}}>Details</button>
                    </PokemonCard>
                )
            })}
        </ Container>
    )
};
