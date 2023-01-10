import styled from "styled-components";

export const CardsContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2em 1em;
    box-sizing: border-box;
    padding-bottom: 2em;
    @media screen and (min-width:1024px){
        gap: 2em 2em;
        justify-content: space-evenly;
        margin: 0 6%;
    }
    @media screen and (min-width:1400px){
        justify-content: center;
        margin:0;
    }
    @media screen and (min-width:1600px){
        justify-content: center;
        margin: 0 10%;
    }
`