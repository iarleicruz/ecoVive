import { Link } from "react-router-dom";
import './header.css';
import { AiOutlineUser } from 'react-icons/ai';
import { CiShoppingCart } from 'react-icons/ci';
import logo from './assets/logo.png'



function Header(){
    return(
        <header>
          <nav>
            <div className="logo">
             <Link to="/"> <img src={logo} alt="logo da EcoVive"/> </Link>
            </div>
             <div className="menu" id="topo">
              
            <Link className="link__menu" to="/">Início</Link>
            <Link className="link__menu" to="/Sobre">Sobre</Link>
            <Link className="link__menu" to="/Produtos">Produtos</Link>
            <Link className="link__menu" to="/ParaEmpresas">Para Empresas</Link>
            <Link className="link__menu" to="/Contato">Contato</Link>
             </div>
            <div className="button__header">
              <button> <AiOutlineUser style={{ fontSize: '24px', color: '#364153' }} /> </button>
              <button> <CiShoppingCart style={{ fontSize: '24px', color: '#364153' }}/> </button>
            </div>
          </nav>
        </header>
    )
}
export default Header;