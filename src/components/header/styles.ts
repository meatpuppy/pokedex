import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
padding: 1em 0em 1em 0em;
background-color: #33498a;
color: #FFFFFF;
border-radius: 0em 0em 1em 1em;
max-height: fit-content;
font-size: 1em;
width: 99vw;
margin-bottom: 1em;
flex-wrap: wrap;

    div{
        display: flex;
        flex-direction: row;
        
        input{
            color: #FFFFFF;
            background-color: #1f1f1f;
            border-radius: 1em;
            padding: 1em;
            border: 0px;
            font-size: 1em;
            width: 250px;
        }

        button{
            background-color: transparent;
            border: 0px;
            cursor: pointer;

            img{
                max-height: 3em;
            }
        }

    }
    

    
`