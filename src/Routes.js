import React from 'react';
import { Switch, Route } from 'react-router-dom';

//responsavel por chamar as páginas na pasta pages
import Home from './pages/Home';
import Upload from './pages/Upload';

//forma simplificada de exportar a function
export default () => {
    return(
        //responsável por chamar as rotas
        <Switch>
            //responsável por dar nome as rotas
            <Route exact path="/" component={Home}/>
            <Route exact path="/upload" component={Upload}/>

        </Switch>
    );
}
