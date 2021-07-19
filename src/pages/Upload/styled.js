import { Redirect } from "react-router-dom";
import styled from "styled-components";

export const Centro = styled.div`
position: relative;
top: 20%;
background-color: ;
width: 100%;
height: 300px;
`;

export const Titulo = styled.text`
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    position: relative;
    top: 10%;
    margin-left: 100px;
    color: #2d3436;

    
    @media screen and (max-width: 100%) and (min-width: 900px) {
        width: 100%;
    }

    @media screen and (max-width: 900px) and (min-width: 500px) {
        width: 100%;
    }

    @media screen and (max-width: 900px) and (min-width: 360px) {
        width: 60%;
    }
`;

export const Anexo = styled.div`
    position: relative;
    top: 15%;
    background-color: ;
    width: 100%;
    height: 80px;
`;

export const Anexos = styled.div`
    position: relative;
    top: 17%;
    background-color: ;
    width: 100%;
    height: 43px;

`;

export const Adicionar = styled.button`
    outline: none;
    margin-top: 4px;
    margin-left: 75px;
    width: 500px;
    height: 34px;
    border-radius: 5px;
    border: 1px solid #b2bec3;
    background-color: white;
    font-family: 'Roboto', sans-serif;
    color: gray;
    font-size: 15px;


    @media screen and (max-width: 100%) and (min-width: 900px) {
        width: 100%;
    }

    @media screen and (max-width: 900px) and (min-width: 500px) {
        width: 100%;
    }

    @media screen and (max-width: 900px) and (min-width: 360px) {
        width: 60%;
    }

    @media screen and (max-width: 360px) and (min-width: 360px) {
        width: 45%;
    }
`;

export const BotaoAdicionar  = styled.button`
    border-radius-left: 0px;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    position: relative;
    left: -3%;
    margin-left: 5px;
    width: 100px;
    height: 34px;
    border-top-left-radius: px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 0px;
    background-color: #0061fe;
    border: none;
    color: white;

    &:hover{
        background-color: #26de81;
    }

    @media screen and (max-width: 100%) and (min-width: 900px) {
        width:100%;
    }

    @media screen and (max-width: 900px) and (min-width: 500px) {
        width: 100%;
    }

    @media screen and (max-width: 900px) and (min-width: 360px) {
        width: 18%;
    }

    @media screen and (max-width: 360px) and (min-width: 360px) {
        width: 20%;
    }

`;

export const Anexo2 = styled.div`
    background-color: ;
    width: 100%;
    height: 80px;
`;

export const Titulo2 = styled.text`
    position: relative;
    top: 65%;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    margin-left: 100px;
    color: #2d3436;

    
    @media screen and (max-width: 100%) and (min-width: 900px) {
        width: 100%;
    }

    @media screen and (max-width: 900px) and (min-width: 500px) {
        width: 100%;
    }

    @media screen and (max-width: 900px) and (min-width: 360px) {
        width: 60%;
    }

`;

export const Anexado = styled.button`
    outline: none;
    margin-top: 4px;
    margin-left: 75px;
    width: 565px;
    height: 34px;
    border-radius: 5px;
    border: 1px solid #b2bec3;
    background-color: white;
    font-family: 'Roboto', sans-serif;
    color: gray;
    font-size: 15px;

    
    @media screen and (max-width: 100%) and (min-width: 900px) {
        width: 100%;
    }

    @media screen and (max-width: 900px) and (min-width: 500px) {
        width: 100%;
    }

    @media screen and (max-width: 900px) and (min-width: 360px) {
        width: 75%;
    }

    @media screen and (max-width: 360px) and (min-width: 360px) {
        width: 60%;
    }
`;

