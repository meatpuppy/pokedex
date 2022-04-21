import styled from "styled-components";

export const Container = styled.div`
    justify-self: center;
    margin-top: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: fit-content;
    color: #ffffff;
    font-size: 16px;
    background-color: #33498a;
    border-radius: 16px;
    padding: 1em;
`;

export const SpritesContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 0.7em;
    justify-content: space-between;

    .sprite {
        height: 20em;
    }
`;

export const StatContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 0.7em;
    min-width: 170px;
    border-bottom: #ffffff 2px solid;
    justify-content: space-between;
    font-size: 1em;
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TypeContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    margin-left: 1em;

    img {
        margin: 0px;
        height: 30px;
    }
`;

export const MovesDetailsContainer = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: #1f1f1f;
    color: white;
    left: 1200px;
    top: 450px;
    margin-right: 1em;
    margin-left: 1em;
    width: fit-content;
    height: fit-content;
    border-radius: 1em;
    padding-left: 1em;
    padding-right: 1em;

    div {
        div {
            display: flex;
            flex-direction: row;

            p{
                :last-child{
                    margin-left: 5px;
                }
            }
        }
    }
`;

export const MovesContainer = styled.div`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    height: 314px;
    padding: 1em;

    div {
        button {
            color: white;
            margin: 0.5em;
            background-color: #1f1f1f;
            border-radius: 1em;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            border: 0px;
            width: 200px;

            p {
                margin-left: 0.5em;
            }

            img {
                height: 2em;
                margin-right: 0.5em;
            }
        }
    }
`;

export const RowSpaceBetween = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #1f1f1f;
        border-radius: 2em;
        border: 0px;
        color: #ffffff;
        font-size: 1em;
        height: 30px;
        width: 30px;
    }
`;
