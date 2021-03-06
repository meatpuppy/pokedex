import { Container, ImgBallAnimated, ListContainer } from "./styles";
import { useContext, useEffect } from "react";
import { StoreContext } from "../global/global";
import { Header } from "components/header";
import { PokemonList } from "components/pokemonlist";
import { PokemonDetails } from "components/pokemondetails";
import { PageSelector } from "components/pageselector";
import ball from "assets/ball.png";

export const Dashboard = () => {
    const { loading, setLoading, setFilteredPokemonList } = useContext(StoreContext);

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
            <PageSelector getPokemonList={getPokemonList} />
            {loading && <ImgBallAnimated src={ball}/>}
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
