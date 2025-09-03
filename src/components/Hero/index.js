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

                    <p>Descubra milhares de produtos eco-frienly de marcas comprometidas com a sustentabilidade. Faça a diferença com cada compra</p>
                    <div className="btn__home__text">
                    <Link className="btnExpProd" to="#">Explorar Produtos <HiArrowSmallRight/> </Link>
                    <Link className="btnSolB2B" to="#">Soluções B2B</Link>
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