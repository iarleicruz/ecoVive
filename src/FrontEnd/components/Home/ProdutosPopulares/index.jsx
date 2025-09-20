import { Link } from "react-router-dom";
import { CiShoppingCart } from 'react-icons/ci';
import imgCopo from './assets/copo.png';
import imgProdHig from './assets/produtosHigiene.png';
import imgProdLimp from './assets/produtosLimpeza.png';
import imgUtens from './assets/utensilios.png';
import imgEstrelas from './assets/estrelas.png';
import './produtosPopulares.css';

function ProdutosPopulares(){
   
    return(
       <div className='produtos' id="prod">
   <h2>Produtos Mais Populares</h2>
   <p>Descubra os produtos sustentáveis mais amados pelos nossos clientes</p>

   <div className='produtos__items'>
    
        <div>
            <img className="produtos__item__img" src={ imgCopo } alt="" />
            <h4>Copo Reutilizável de Bambu</h4>
               <img className="imgEstrelas" src= { imgEstrelas } alt="" />
               <span>(4.8)</span>
               <p className="preco">R$ 29,90 <span>R$ 39,90</span></p>
             
        <Link className="addCar" to="#"> <CiShoppingCart className="iconCar"/> Adicionar ao Carrinho </Link>
        </div>
        <div>
            <img className="produtos__item__img" src={ imgProdHig } alt="" />
            <h4>Kit Produtos de Higiene <br/> Sustentável</h4>
               <img className="imgEstrelas" src= { imgEstrelas } alt="" />
               <span>(4.9)</span>
                <p className="preco">R$ 29,90  <span>R$ 39,90</span></p>
                    
        <Link className="addCar" to="#"> <CiShoppingCart className="iconCar"/> Adicionar ao Carrinho  </Link>
        </div>
        <div>
            <img className="produtos__item__img" src={ imgProdLimp } alt="" />
            <h4>Utensílios de Cozinha <br/> Ecológicos</h4>
               <img className="imgEstrelas" src= { imgEstrelas } alt="" />
               <span>(4.7)</span>
        
             <p className="preco">R$ 29,90  <span>R$ 39,90</span></p>
            
            
        <Link className="addCar" to="#"> <CiShoppingCart className="iconCar"/> Adicionar ao Carrinho  </Link>
        </div>
        <div>
            <img className="produtos__item__img" src={ imgUtens } alt="" />
                 <h4>Produtos de Limpeza <br/> Naturais</h4>
               <img className="imgEstrelas" src= { imgEstrelas } alt="" />
               <span>(4.6)</span>
                <p className="preco">R$ 29,90 <span>R$ 39,90</span></p>
                
        <Link className="addCar" to="#"> <CiShoppingCart className="iconCar"/> Adicionar ao Carrinho  </Link>
        </div>
     


   </div>

</div>
    )
}

export default ProdutosPopulares;