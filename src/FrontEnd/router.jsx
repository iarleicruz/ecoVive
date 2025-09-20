import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Sobre from './pages/sobre';
import Produtos from './pages/Produtos';
import ParaEmpresas from './pages/paraEmpresas';
import Contato from './pages/contato';

import Header from './components/Header';
import Footer from './components/Footer';




function RoutesApp(){
    return(
<BrowserRouter>
<Header/>
<Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/Sobre" element={ <Sobre/> } />
    <Route path="/Produtos" element={ <Produtos/> } />
    <Route path="/ParaEmpresas" element={ <ParaEmpresas/> } />
    <Route path="/Contato" element={ <Contato/> } />
</Routes>
<Footer/>
</BrowserRouter>

    )
}

export default RoutesApp;