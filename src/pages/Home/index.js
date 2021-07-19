import React, {Component} from 'react';
//responsável por chamar os estilos do main.js, que funciona como um CSS
import {Fundo,Card} from '../../Components/Main';
import { render } from '@testing-library/react';



export default class Home extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
         
    }
 

    //Responsável por fazer a renderização(exportação) do projeto
    render(){
        return( 
            <Fundo>
                <Card>CARD 1</Card>
                 <Card>CARD 2</Card>
                  <Card>CARD 3</Card>
            </Fundo>
        );
    }
}


