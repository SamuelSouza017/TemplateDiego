import styled from 'styled-components';

export const Fundo = styled.div`
body{width:100%;}
    position: absolute;
    width: 100%;    
    height: 100%;
    background-color: white;

`;

export const Card = styled.div`
    body{width:100%;}
    position: relative;
    top: 20%;
    float: left;
    margin-left: 70px;
    margin-top: 25px;
    width: 350px;
    height: 140px;
    border-radius: 8px;
    background-color: #dfe6e9;
    border: 1px solid #b2bec3;
    color: gray;
    font-size: 55px;
    font-family: 'Roboto', sans-serif;
    text-align:center;
    line-height:140px;
    box-shadow: 5px 5px 5px;

    &:hover{
        transition-timing-fuction: ease-in-out;
        transition: 1s;
        color: #2d3436;
    }
`;

