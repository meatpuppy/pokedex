import styled from "styled-components";

export const PokemonCard = styled.div`
display: flex;
flex-direction: column;
width: 200px;
align-items: center;
align-self: center;
padding: 1em;
color: #FFFFFF;
background-color: #33498a;
border-radius: 1em;
margin: 1em;

        .card{
            display: flex;
            flex-direction: row;
            align-items: center;
            max-width: 232px;
            max-height: 296px;

            p{
                font-size: 1em;
            }

            img{
                height: 2em;
                margin-right: 10px;
            }
        }

        img {
            height: 10em;
        }

        button{
            border: 0px;
            border-radius: 1em;
            font-size: 1em;
            color: #FFFFFF;
            padding: 1em;
            background-color: #1f1f1f;
        }
`

export const Container = styled.div`
display: flex;
max-width: 1320px;
flex-wrap: wrap;
flex-direction: row;
`