import { Link } from "react-router-dom";
import imghero from "./assets/imghero.png";
import imgcert from "./assets/imgcert.png";
import { HiArrowSmallRight } from 'react-icons/hi2';

import './hero.css'

function Hero(){
    return(
        <div className="home">
            <div className="home__container">
                 <div className="home__text">
                    <h1>Produtos<br/><strong>Sustentáveis</strong><br/>
                    para um Futuro Melhor
                    </h1>

                    <p>"Encontre produtos sustentáveis de marcas comprometidas com o planeta. Cada escolha faz a diferença."</p>
                    <div className="btn__home__text">
                    {/* <Link className="btnExpProd" to="/#prod">Explorar Produtos <HiArrowSmallRight/> </Link> */}
                    <a className="btnExpProd" href="#prod">Começar Agora <HiArrowSmallRight/></a>
                    <Link className="btnSolB2B" to ="/Produtos">Para Empresas</Link>
                    </div>

                 </div>
                 <div className="home__img">
                    <img className="img__hero" src={imghero} alt="imagem hero"/>
                    <img className="img__cert" src={imgcert} alt="imagem certificado"/>
                </div>
           </div>
           
        </div>
                   
                
    )
}

export default Hero;