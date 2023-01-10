import styled from "styled-components";
export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 0 1.5em;
    height: 60px;
    background-color: var(--branco);
    box-sizing: border-box;
    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
    h2{
        font-size:22px;
        font-weight: 700;
    }
    ul{
        display: flex;
        gap: 1em;
        list-style: none;
        a{
            text-decoration: none;
            color: var(--cor-texto);
            font-weight: 400;
            font-size: 16px;
        }
    }

     @media screen and (min-width:1024px){
        padding: 0 5%;
    }
    
        @media screen and (min-width:1400px){
        padding: 0 7%;
    }
    
    
    @media screen and (min-width:1500px){
        padding: 0 11%;
    }  
`