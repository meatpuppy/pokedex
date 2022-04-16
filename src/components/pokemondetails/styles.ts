import styled from "styled-components";

export const Container = styled.div`

justify-self: center;
margin-top: 1.5em;
display: flex;
flex-direction: column;
justify-content: center;
width: fit-content;
color: #FFFFFF;
font-size: 16px;
background-color: #33498a;
border-radius: 16px;
padding:1em;
`

export const SpritesContainer = styled.div`

display: flex;
flex-direction: row;
font-size: 0.7em;
justify-content: space-between;

    .sprite{
        height: 20em;
    }

`

export const StatContainer = styled.div`

display: flex;
flex-direction: row;
font-size: 0.7em;
max-width: 150px;
border-bottom: #FFFFFF 2px solid;
justify-content: space-between;
font-size: 1em;
`

export const RowContainer = styled.div`

display: flex;
flex-direction: row;
`

export const ColumnContainer = styled.div`

display: flex;
flex-direction: column;
`

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
    color: #FFFFFF;
    font-size: 1em;
    height: 30px;
    width: 30px;
}
`

