import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--cinza-fundo);
    padding: 0 1.5em;
    min-height: 100vh;
    text-align: center;
    .iframe{
        width:314px;
        height:177px;
        margin-bottom: 2em;
    }
    @media screen and (min-width:1024px){
        //padding: 0 5%;
        .iframe{
            width: 640px;
            height: 361px;
        }
    }
    @media screen and (min-width:1400px){
        
        .iframe{
            width: 1200px;
            height: 676.88px;
        }
    }
    @media screen and (min-width:1500px){
        //padding: 0 15%;
        .iframe{
            width: 1200px;
            height: 676.88px;
        }
    }

`