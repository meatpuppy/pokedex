import styled from "styled-components";

interface PageButtonProps {
    isSelected: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const RandomPage = styled.button`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 0px;
    background-color: #1f1f1f;
    color: white;
    font-size: 1em;
    width: fit-content;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 1em;

`;

export const PageSelect = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 350px;
    justify-content: center;
    align-items: center;
    margin-bottom: 1em;

    .leftArrow {
        height: 1.2em;
        margin-right: 1em;
    }

    .rightArrow {
        height: 1.2em;
        margin-right: 0em;
        margin-left: 1em;
        rotate: 180deg;
    }
`;

export const PageButton = styled.button<PageButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: ${(props) => {
        return props.isSelected ? "#33498a" : "#1f1f1f";
    }};
    color: #ffffff;
    font-size: 1em;
    width: 35px;
    height: 35px;
    border-radius: 13px;
    margin-right: 1em;
    border: 0px;

    :last-of-type {
        margin-right: 0px;
    }
`;
