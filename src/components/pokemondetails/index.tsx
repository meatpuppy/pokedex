import { StoreContext } from "components/global/global";
import { useContext, useState } from "react";

import {
    Container,
    SpritesContainer,
    StatContainer,
    RowContainer,
    ColumnContainer,
    RowSpaceBetween,
    TypeContainer,
    MovesContainer,
    MovesDetailsContainer,
    ImgBallStatic,
    ImgBallAnimated,
} from "./styles";

import bug from "assets/typebug.png";
import dark from "assets/typedark.png";
import dragon from "assets/typedragon.png";
import electric from "assets/typeelectric.png";
import fairy from "assets/typefairy.png";
import fighting from "assets/typefighting.png";
import fire from "assets/typefire.png";
import flying from "assets/typeflying.png";
import ghost from "assets/typeghost.png";
import grass from "assets/typegrass.png";
import ground from "assets/typeground.png";
import ice from "assets/typeice.png";
import normal from "assets/typenormal.png";
import poison from "assets/typepoison.png";
import psychic from "assets/typepsychic.png";
import rock from "assets/typerock.png";
import steel from "assets/typesteel.png";
import water from "assets/typewater.png";
import ball from "assets/ball.png";

interface FlavorTextEntries {
    flavor_text: string;
}

interface MoveDetails {
    name: string;
    type: { name: string };
    pp: number;
    target: { name: string };
    accuracy: number;
    flavor_text_entries: FlavorTextEntries[];
}

export const PokemonDetails = () => {
    const { details, setDetails } = useContext(StoreContext);
    const [moveDetails, setMoveDetails] = useState<MoveDetails | null>(null);
    const [animation, setAnimation] = useState<number>();

    const types = {
        bug,
        dark,
        dragon,
        electric,
        fairy,
        fighting,
        fire,
        flying,
        ghost,
        grass,
        ground,
        ice,
        normal,
        poison,
        psychic,
        rock,
        steel,
        water,
    };

    async function handleMoveDetails(url: string, index: number) {
        if (moveDetails !== null) {
            setMoveDetails(null)
            setAnimation(-1)
            return;
        }
        const fetchResult = await fetch(url);
        const resultJson = await fetchResult.json();
        setMoveDetails(resultJson);
        setAnimation(index)
    }

    console.log(animation)

    if (details === null) {
        return null;
    }
    return (
        <>
            <Container>
                <RowSpaceBetween>
                    <p>{details.name.toUpperCase()}</p>
                    <button
                        onClick={() => {
                            setDetails(null);
                            setMoveDetails(null);
                        }}
                    >
                        <p>X</p>
                    </button>
                </RowSpaceBetween>

                <SpritesContainer>
                    <img
                        className="sprite"
                        src={details.sprites.front_default}
                        alt="This is the normal version"
                    />
                    <img className="sprite" src={details.sprites.front_shiny} alt="This is the shiny version" />
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
                    <ColumnContainer>
                        <TypeContainer>
                            {details.types.map((item) => {
                                const name = item.type.name;
                                return <img src={types[name]} alt={name} />;
                            })}
                        </TypeContainer>
                        <MovesContainer>
                            {details.moves.map((item, index) => {

                                return (
                                    <div>
                                        <button
                                            onClick={() => handleMoveDetails(item.move.url, index)}>
                                            <p>
                                                {item.move.name.toUpperCase().replace("-", " ")}
                                            </p>
                                            {index !== animation && <ImgBallStatic src={ball} />}
                                            {index === animation && <ImgBallAnimated src={ball} />}
                                            {/* <img src={ball} alt="This is a pokeball" /> */}
                                        </button>
                                    </div>
                                );
                            })}
                        </MovesContainer>
                    </ColumnContainer>
                </RowContainer>
            </Container>
            <MovesDetailsContainer>
                {moveDetails && (
                    <div>
                        <div>
                            <p>Name:</p>
                            <p>
                                {moveDetails.name
                                    .toUpperCase()
                                    .replace("-", " ")}
                            </p>
                        </div>
                        <div>
                            <p>Type:</p>
                            <p>{moveDetails.type.name.toUpperCase()}</p>
                        </div>
                        <div>
                            <p>PP:</p>
                            <p>{moveDetails.pp}</p>
                        </div>
                        <div>
                            <p>Target:</p>
                            <p>
                                {moveDetails.target.name
                                    .toUpperCase()
                                    .replace("-", " ")}
                            </p>
                        </div>
                        <div>
                            <p>Accuracy:</p>
                            <p>{moveDetails.accuracy}</p>
                        </div>
                        <div>
                            <p>Description:</p>
                            <p>
                                {moveDetails.flavor_text_entries[0].flavor_text}
                            </p>
                        </div>
                    </div>
                )}
            </MovesDetailsContainer>
        </>
    );
};
