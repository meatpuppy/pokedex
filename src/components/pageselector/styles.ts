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
    border-radius: 1em;
    margin-right: 1em;
    cursor: pointer;
`;

export const PageSelect = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 350px;
    justify-content: center;
    align-items: center;
    margin-bottom: 1em;
`;

export const LeftArrow = styled.img`
    height: 1.2em;
    margin-right: 1em;
    cursor: pointer;
`;

export const RightArrow = styled.img`
    height: 1.2em;
    margin-right: 0em;
    margin-left: 1em;
    rotate: 180deg;
    cursor: pointer;
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
    cursor: pointer;

    :last-of-type {
        margin-right: 0px;
    }
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const GoToPageInput = styled.input`
    display: flex;
    background-color: #1f1f1f;
    padding: 1em;
    border-radius: 1em;
    border: 0px;
    color: white;
    font-size: 1em;
`;
