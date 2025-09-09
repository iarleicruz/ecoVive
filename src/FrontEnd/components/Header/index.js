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
              <img src={logo} alt="logo da EcoVive"/> 
            </div>
             <div className="menu">
              
            <Link className="link__menu" to="/">Início</Link>
            <Link className="link__menu" to="/Sobre">Sobre</Link>
            <Link className="link__menu" to="/Prodb2b">Produtos B2B</Link>
            <Link className="link__menu" to="/Prodb2c">Produtos B2C</Link>
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