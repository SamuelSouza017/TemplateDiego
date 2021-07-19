import React, {Component} from 'react';
//responsável por chamar os estilos do main.js, que funciona como um CSS
import {Fundo} from '../../Components/Main';
import {Titulo,Titulo2,Centro,Anexo,Anexo2,Anexos,Adicionar,BotaoAdicionar,Anexado} from '../Upload/styled';
import { render } from '@testing-library/react';      


export default class Upload extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }
 

    //Responsável por fazer a renderização(exportação) do projeto
    render(){
        return( 
            <Fundo>
               <Centro>
                 <Anexo>
                   <Titulo>Anexar Arquivos</Titulo>
                    <Anexos>       
                     <Adicionar>Anexar os Arquivos</Adicionar>
                      <BotaoAdicionar>Anexar</BotaoAdicionar>
                    </Anexos>
                 </Anexo>
                  <Anexo2>
                    <Titulo2>Arquivos anexados</Titulo2>
                  </Anexo2>
                    <Anexado>Nenhum arquivo anexado</Anexado>
               </Centro> 
                
            </Fundo>
        );
    }
}


