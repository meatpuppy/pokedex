import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
font-size: 1em;
max-width: fit-content;
margin-top: 15vh;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1em;
        background-color: #33498a;
        color: #FFFFFF;
        border-radius: 1em;


        div{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            padding: 1em;
            color: #FFFFFF;

            input{
                color: #FFFFFF;
                background-color: #1f1f1f;
                border-radius: 1em;
                padding: 1em;
                border: 0px;
                font-size: 1em;
                margin-left: 1em;
            }

            select{
                color: #FFFFFF;
                background-color: #1f1f1f;
                border-radius: 1em;
                padding: 1em;
                border: 0px;
                font-size: 1em;
                margin-left: 1em;
            }

            img {
                max-height: 5em;
            }

            button{
                color: #FFFFFF;
                background-color: #1f1f1f;
                border-radius: 1em;
                padding: 1em;
                border: 0px;
                font-size: 1em;
                align-self: center;

            }
        }
    }
`;