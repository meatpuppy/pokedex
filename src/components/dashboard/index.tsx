import { Container, ListContainer } from "./styles";
import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../global/global";
import { Header } from "components/header";
import { PokemonList } from "components/pokemonlist";
import { PokemonDetails } from "components/pokemondetails";
import { PokemonListResults } from "models/PokemonListResults";
import { PokemonCardElements } from "models/PokemonCardElements";
import { PageSelector } from "components/pageselector";

export const Dashboard = () => {
    const { filteredPokemonList, setFilteredPokemonList } = useContext(StoreContext);
    const [loading, setLoading] = useState(false);

    const getPokemonForm = (limit: number, offset: number) => {
        return fetch(
            `https://pokeapi.co/api/v2/pokemon-form?limit=${limit}&offset=${offset}`
        );
    };

    const getPokemonList = (limit: number, offset: number) => {
        setLoading(true);
        getPokemonForm(limit, offset)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                const results = response.results;
                Promise.all(results.map(({url}:{url:string}) => {
                    return(
                        fetch(url)
                    )
                }))
                .then((response) => { 
                    const results = response.map((item) => {
                        return item.json()
                    })
                    Promise.all(results)
                    .then((response) => { 
                        setFilteredPokemonList(response);
                        setLoading(false);
                    })
                })
            });
    };

    useEffect(() => {
        getPokemonList(20, 0);
    }, []);

    return (
        <Container>
            <Header />
            {loading && <p>LOADING</p>}
            {!loading && <PokemonDetails />}
            {!loading && (
                <ListContainer>
                    <PokemonList />
                </ListContainer>
            )}
            <PageSelector getPokemonList={getPokemonList} />
        </Container>
    );
};
