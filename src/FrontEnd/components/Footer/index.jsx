import { Link } from "react-router-dom";
import logoWhite from './assets/logoWhite.png';
import './footer.css';
import face from './assets/Link → Facebook.png';
import insta from './assets/Link → instagram.png';
import x from './assets/Link → X.png';
import email from './assets/Email.png';
import tel from './assets/Telefone.png'
import local from './assets/Local.png'

function Footer(){
    return(

        <div className="footer">
                <div className="footer__container">

                    <div className="footer__mark">
                    <img src={logoWhite} alt="" />
                    <p>Marketplace de produtos sustentáveis que coecta <br />
                    consumidores conscientes com marcas coprometidas com o <br />
                    meio ambiente. Juntos por um futuro mais verde.</p>
                    <div className="footer__mark__img">
                    <img src= { face } alt="" />
                    <img src= { insta } alt="" />
                    <img src= { x }  alt="" />
                    </div>
                    </div>

                    <div className="footer__links">
                        <p>Links Rápidos</p>
                    <a className="link__menu" href="/">Início</a>
                    <a className="link__menu" href="/Sobre">Sobre</a>
                    <a className="link__menu" href="/Prodb2b">Produtos B2B</a>
                    <a className="link__menu" href="/Prodb2c">Produtos B2C</a>
                    <a className="link__menu" href="/Contato">Contato</a>
                   
                    </div>

                    <div className="footer__contato">
                        <p>Contato</p>
                        <ul>
                            
                            <li><img src= {email} alt="" /> contato@ecovive.com.br</li>
                            <li> <img src= {tel} alt="" /> (11) 9999-9999</li>
                            <li> <img src= {local} alt="" /> São Paulo</li>
                        </ul>
                    </div>


                </div>
                <hr />
        <p className="copyright">© 2025 EcoVive. Todos os direitos reservados. Marketplace de produtos sustentáveis.</p>

        </div>

    )
}

export default Footer;