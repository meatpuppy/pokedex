import styled from "styled-components";

interface PageButtonProps {
    isSelected: boolean,
}

export const PageSelect = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 350px;
    justify-content: center;
    align-items: center;

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
    background-color: ${(props) => { return props.isSelected ? "#33498a" : "#1f1f1f" }};
    color: #FFFFFF;
    font-size: 1em;
    width: 35px;
    height: 35px;
    border-radius: 13px;
    margin-right: 1em;
    border: 0px;

    :last-of-type{
        margin-right: 0px;
    }
`
