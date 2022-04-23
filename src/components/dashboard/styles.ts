import styled, { keyframes } from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`

export const ListContainer = styled.div`
margin-top: 2em;
display: flex;
flex-direction: row;
justify-content: center;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ImgBallAnimated = styled.img`

animation: ${rotate} 0.7s ease infinite;
height: 400px;
margin-bottom: 1em;
`