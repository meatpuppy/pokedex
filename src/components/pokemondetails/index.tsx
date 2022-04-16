import { StoreContext } from "components/global/global";
import { useContext } from "react";
import {
    Container,
    SpritesContainer,
    StatContainer,
    RowContainer,
    ColumnContainer,
    RowSpaceBetween,
} from "./styles";

export const PokemonDetails = () => {
    const { details, setDetails } = useContext(StoreContext);

    if (details === null) {
        return null;
    }
    return (
        <Container>
            <RowSpaceBetween>
                <p>{details.name.toUpperCase()}</p>
                <button onClick={() => {setDetails(null)}}>
                    <p>X</p>
                </button>
            </RowSpaceBetween>

            <SpritesContainer>
                <img className="sprite" src={details.sprites.front_default} />
                <img className="sprite" src={details.sprites.front_shiny} />
            </SpritesContainer>
            <RowContainer>
                <ColumnContainer>
                    <p>Stats</p>
                    {details.stats.map((item) => {
                        return (
                            <StatContainer>
                                <p>{item.stat.name.toUpperCase()}</p>
                                <p>{item.base_stat}</p>
                            </StatContainer>
                        );
                    })}
                </ColumnContainer>
                {details.types.map((item) => {
                    return (
                        <RowContainer>
                            <p>{item.type.name.toUpperCase()}</p>
                        </RowContainer>
                    );
                })}
            </RowContainer>
        </Container>
    );
};
