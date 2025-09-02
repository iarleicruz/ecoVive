import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Sobre from './pages/sobre';
import Prodb2b from './pages/Prodb2b';
import Prodb2c from './pages/Prodb2c';
import Contato from './pages/contato';

import Header from './components/Header';


function RoutesApp(){
    return(
<BrowserRouter>
<Header/>
<Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/Sobre" element={ <Sobre/> } />
    <Route path="/Prodb2b" element={ <Prodb2b/> } />
    <Route path="/Prodb2c" element={ <Prodb2c/> } />
    <Route path="/Contato" element={ <Contato/> } />
</Routes>
</BrowserRouter>

    )
}

export default RoutesApp;