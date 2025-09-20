import { Link } from "react-router-dom";
import imghero from "./assets/imghero.png";
import imgcert from "./assets/imgEmp.png";
import { HiArrowSmallRight } from 'react-icons/hi2';
import { BsFillCalculatorFill } from "react-icons/bs";

import './heroProdutos.css'

function HeroProdutos(){
    return(
        <div className="heroB2B">
            <div className="heroB2B__container">
                 <div className="heroB2B__text">
                    <h1>Soluções<br/>Sustentáveis<br/>
                    para sua Empresa
                    </h1>

                    <p>Transfome sua empresa com produtos sustentáveis de alta <br/> qualidade. Oferecemos soluções completas para empresas comprometidas com o futuro do planeta.</p>
                    <div className="btn__heroB2B__text">
                    <Link className="btnSoliCot" to="#"><BsFillCalculatorFill /> Solicitar Cotação </Link>
                    {/* <Link className="btnVerProd" to="/Prodb2b/#verProd">Ver Produtos <HiArrowSmallRight/></Link> */}
                   <a className="btnVerProd" href="#ecovive">Ver Produtos <HiArrowSmallRight/></a>
        
                    </div>

                 </div>
                 <div className="heroB2B__img">
                    <img className="img__hero" src={imghero} alt="imagem hero"/>
                    <img className="img__cert" src={imgcert} alt="imagem certificado"/>
                </div>
           </div>
           
        </div>
                   
                
    )
}

export default HeroProdutos;