import './categorias.css';
import { Link } from "react-router-dom";
import { HiArrowSmallRight } from 'react-icons/hi2';
import imgCor from './assets/Background.png';
import imgFol from './assets/Background1.png';
import imgEstr from './assets/Background2.png';
import imgTri from './assets/Background3.png';

function Categorias(){
    return(
<div className='categorias'>
   <h1>Categorias em Destaque</h1>
   <p>Explore nossa coleção cuidadosa de produtos sutentáveis<br/> organizados
    por categoria</p>

   <div className='categorias__items'>
    
        <div>
            <img src={ imgCor } alt="" />
            <h4>Moda Sustentável</h4>
            <p>Roupas e acessórios <br/> eco-friendly</p>
        <Link className="verProd" to="#">Ver Produtos <HiArrowSmallRight/> </Link>
        </div>
        <div>
            <img src={ imgFol } alt="" />
            <h4>Casa & Decoração</h4>
            <p>Produtos para um <br/>lar sustentável</p>
        <Link className="verProd" to="#">Ver Produtos <HiArrowSmallRight/> </Link>
        </div>
        <div>
            <img src={ imgEstr } alt="" />
            <h4>Beleza Natural</h4>
            <p>Cosméticos naturais<br/> e orgânicos</p>
        <Link className="verProd" to="#">Ver Produtos <HiArrowSmallRight/> </Link>
        </div>
        <div>
            <img src={ imgTri } alt="" />
            <h4>Reciclagem</h4>
            <p>Produtos feitos com <br/> materiais reciclados</p>
        <Link className="verProd" to="#">Ver Produtos <HiArrowSmallRight/> </Link>
        </div>
     


   </div>

</div>

    )
}

export default Categorias;