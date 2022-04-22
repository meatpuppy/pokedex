import { Container, PokemonCard } from "./styles";
import { useContext } from "react";
import { StoreContext } from "../global/global";
import ballpng from "../../assets/ball.png";

export function PokemonList() {
    const { setDetails, filteredPokemonList, currentPage, isFiltering } =
        useContext(StoreContext);

    const showDetails = (url: string) => {
        window.scrollTo(0,0)
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setDetails(response);
            });
    };

    function getExhibitionList() {
        if (!isFiltering) {return filteredPokemonList};
        const index = (currentPage-1)*20;
        console.log(index)
        return (filteredPokemonList.slice(index, index+20))
    }

    const exhibitionList = getExhibitionList();

    return (
        <Container>
            {exhibitionList.map((item) => {
                return (
                    <PokemonCard key={item.id}>
                        <div className="card">
                            <img src={ballpng} alt="This is a pokeball"></img>
                            <p>{item.name.toUpperCase()}</p>
                        </div>
                        <img src={item.sprites.front_default} alt={item.name}></img>
                        <button
                            onClick={() => {
                                showDetails(item.pokemon.url);
                            }}
                        >
                            Details
                        </button>
                    </PokemonCard>
                );
            })}
        </Container>
    );
}
