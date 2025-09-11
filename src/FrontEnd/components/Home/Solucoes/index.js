import './solucoes.css';
import { Link } from "react-router-dom";
import { HiArrowSmallRight } from 'react-icons/hi2';


function Solucoes(){
    return(

   
   <div className='solucoes'>
         <div className='solucoes__text'>
            <h4>Soluções Sustentáveis para sua Empresa</h4>
            <p>Oferecemos produtos sustentáveis em grande escala para empresas <br />
            comprometidas com a responsabilidade ambiental</p>
        <Link className="conhecerProd" to="#">Conhecer Soluções B2B <HiArrowSmallRight/> </Link>
      </div>
           
</div>

    )
}

export default Solucoes;