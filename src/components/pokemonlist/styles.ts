import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 232px;
    max-height: 296px;
`;

export const PokeBallImg = styled.img`
    max-height: 2em;
    margin-right: 10px;
`;

export const PokemonTitle = styled.p`
    font-size: 1em;
`;

export const PokemonCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    align-items: center;
    align-self: center;
    justify-self: center;
    padding: 1em;
    color: #ffffff;
    background-color: #33498a;
    border-radius: 1em;
    margin: 1em;

    img {
        height: 10em;
    }

    button {
        border: 0px;
        border-radius: 1em;
        font-size: 1em;
        color: #ffffff;
        padding: 1em;
        background-color: #1f1f1f;
        cursor: pointer;
    }
`;

export const Container = styled.div`
    display: flex;
    max-width: 1320px;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
`;
