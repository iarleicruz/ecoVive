import { Link } from "react-router-dom";
import svg from './assets/SVG.png';
import kitAlim from './assets/Kit Alimentação Corporativa.png';
import kitEsc from './assets/Kit Escritório Sustentável.png';
import brindes from './assets/Brindes Corporativos Sustentáveis.png';
import produtos from './assets/Produtos de Limpeza Biodegradáveis.png';
import uniforme from './assets/Uniformes de Algodão Orgânico.png';
import embalag from './assets/Embalagens Compostáveis.png';
import './nossosProdutos.css'
import { BsFillCalculatorFill } from "react-icons/bs";
            
function ProdutosPopulares(){
   
    return(
          
       <div className='nossos__produtos' id='ecovive'>

   <h2>Nossos Produtos</h2>
   <p>Soluções sustentáveis para todas as necessidades da sua empresa.</p>


    <div className="nossos__produtos__menu">
              
            <Link className="link__nossos__produtos__menu" to="#">Todas as Categorias</Link>
            <Link className="link__nossos__produtos__menu" to="#">Material de Escritório</Link>
            <Link className="link__nossos__produtos__menu" to="#">Produtos de Limpeza</Link>
            <Link className="link__nossos__produtos__menu" to="#">Embalagens Sustentáveis</Link>
            <Link className="link__nossos__produtos__menu" to="#">Uniformes Ecológicos</Link>
            <Link className="link__nossos__produtos__menu" to="#">Brindes Corporativos</Link>
            <Link className="link__nossos__produtos__menu" to="#">Alimentação Corporativa</Link>
    </div>

   <div className='nossos__produtos__items'>
    
        <div className='nossos__produtos__items_div'>
            <img className="nossos__produtos__item__img" src={ kitEsc } alt="" />
            <h4>Kit Escritório Sustentável</h4>
            <p className="nossos__produtos__text">Conjunto completo de materiais de escritório eco-friendly para equipes.</p>
             <strong>Características:</strong>
               <div className="nossos__prod__caract">
                <img src= { svg } alt="" />
               <p>Papel reciclado</p>
               </div>
               <div className="nossos__prod__caract">
               <img src= { svg } alt="" />
               <p>Canetas biodegradáveis</p>
               </div>
               <div className="nossos__prod__caract">
               <img src= { svg } alt="" />
               <p>Pastas de material reciclado</p>
               </div>

               <div className="nossos__prod__unid">
                    <div className="nossos__prod__unid__text">
                    <p>Quantidade mínima </p>
                    <p>Preço unitário: </p>
                    <p>Preço atacado: </p>
                    </div>
                    <div className="nossos__prod__unid__val">
                    <p>50 unidades</p>
                    <p>R$ 45,90</p>
                    <p>R$ 38,90</p>
                    </div>
                </div>

        <div className="btn__solCot">
           <Link className="btn" to="#"> <BsFillCalculatorFill /> Solicitar Cotação </Link>
           </div>
        </div>
       
        <div className='nossos__produtos__items_div'>
            <img className="nossos__produtos__item__img" src={ produtos } alt="" />
            <h4>Produtos de Limpeza Biodegradáveis</h4>
            <p className="nossos__produtos__text">Linha completa de produtos de limpeza para empresas, 100% biodegradáveis.</p>
             <strong>Características:</strong>
               <div className="nossos__prod__caract">
                <img src= { svg } alt="" />
               <p>Fórmula concentrada</p>
               </div>
               <div className="nossos__prod__caract">
               <img src= { svg } alt="" />
               <p>Embalagem retornável</p>
               </div>
               <div className="nossos__prod__caract">
               <img src= { svg } alt="" />
               <p>Não tóxico</p>
               </div>

               <div className="nossos__prod__unid">
                    <div className="nossos__prod__unid__text">
                    <p>Quantidade mínima </p>
                    <p>Preço unitário: </p>
                    <p>Preço atacado: </p>
                    </div>
                    <div className="nossos__prod__unid__val">
                    <p>100 unidades</p>
                    <p>R$ 25,90</p>
                    <p>R$ 19,90</p>
                    </div>
                </div>
           <div className="btn__solCot">
           <Link className="btn" to="#"> <BsFillCalculatorFill /> Solicitar Cotação </Link>
           </div>
        </div>
       
        <div className='nossos__produtos__items_div'>
            <img className="nossos__produtos__item__img" src={ embalag } alt="" />
            <h4>Embalagens Compostáveis</h4>
            <p className="nossos__produtos__text">Embalagens para delivery e e-commerce que se decompõem naturalmente.</p>
             <strong>Características:</strong>
               <div className="nossos__prod__caract">
                <img src= { svg } alt="" />
               <p>100% compostável</p>
               </div>
               <div className="nossos__prod__caract">
               <img src= { svg } alt="" />
               <p>Resistente à umidade</p>
               </div>
               <div className="nossos__prod__caract">
               <img src= { svg } alt="" />
               <p>Personalização disponível</p>
               </div>

               <div className="nossos__prod__unid">
                    <div className="nossos__prod__unid__text">
                    <p>Quantidade mínima </p>
                    <p>Preço unitário: </p>
                    <p>Preço atacado: </p>
                    </div>
                    <div className="nossos__prod__unid__val">
                    <p>1000 unidades</p>
                    <p>R$ 2,50</p>
                    <p>R$ 1,80</p>
                    </div>
                </div>
            <div className="btn__solCot">
           <Link className="btn" to="#"> <BsFillCalculatorFill /> Solicitar Cotação </Link>
           </div>
        </div>
   
        <div className='nossos__produtos__items_div'>
            <img className="nossos__produtos__item__img" src={ uniforme } alt="" />
            <h4>Uniformes de Algodão Orgânico</h4>
            <p className="nossos__produtos__text">Uniformes corporativos feitos com algodão orgânico certificado.</p>
             <strong>Características:</strong>
               <div className="nossos__prod__caract">
                <img src= { svg } alt="" />
               <p>Algiodão orgânico</p>
               </div>
               <div className="nossos__prod__caract">
               <img src= { svg } alt="" />
               <p>Tingimento natural</p>
               </div>
               <div className="nossos__prod__caract">
               <img src= { svg } alt="" />
               <p>Bordado personalizado</p>
               </div>

               <div className="nossos__prod__unid">
                    <div className="nossos__prod__unid__text">
                    <p>Quantidade mínima </p>
                    <p>Preço unitário: </p>
                    <p>Preço atacado: </p>
                    </div>
                    <div className="nossos__prod__unid__val">
                    <p>20 unidades</p>
                    <p>R$ 89,90</p>
                    <p>R$ 69,90</p>
                    </div>
                </div>

        <div className="btn__solCot">
           <Link className="btn" to="#"> <BsFillCalculatorFill /> Solicitar Cotação </Link>
           </div>
        </div>
       
        <div className='nossos__produtos__items_div'>
            <img className="nossos__produtos__item__img" src={ brindes } alt="" />
            <h4>Brindes Corporativos Sustentáveis</h4>
            <p className="nossos__produtos__text">Linha de brindes eco-friendly para eventos e campanhas corporativas.</p>
             <strong>Características:</strong>
               <div className="nossos__prod__caract">
                <img src= { svg } alt="" />
               <p>Materiais reciclados</p>
               </div>
               <div className="nossos__prod__caract">
               <img src= { svg } alt="" />
               <p>Personalização laser</p>
               </div>
               <div className="nossos__prod__caract">
               <img src= { svg } alt="" />
               <p>Embalagem sustentável</p>
               </div>

               <div className="nossos__prod__unid">
                    <div className="nossos__prod__unid__text">
                    <p>Quantidade mínima </p>
                    <p>Preço unitário: </p>
                    <p>Preço atacado: </p>
                    </div>
                    <div className="nossos__prod__unid__val">
                    <p>100 unidades</p>
                    <p>R$ 15,90</p>
                    <p>R$ 12,90</p>
                    </div>
                </div>
           <div className="btn__solCot">
           <Link className="btn" to="#"> <BsFillCalculatorFill /> Solicitar Cotação </Link>
           </div>
        </div>
       
        <div className='nossos__produtos__items_div'>
            <img className="nossos__produtos__item__img" src={ kitAlim } alt="" />
            <h4>Kit Alimentação Corporativa</h4>
            <p className="nossos__produtos__text">Produtos alimentícios orgânicos para refeitórios e eventos corporativos.</p>
             <strong>Características:</strong>
               <div className="nossos__prod__caract">
                <img src= { svg } alt="" />
               <p>Orgânico certificado</p>
               </div>
               <div className="nossos__prod__caract">
               <img src= { svg } alt="" />
               <p>Comércio justo</p>
               </div>
               <div className="nossos__prod__caract">
               <img src= { svg } alt="" />
               <p>Embalagem biodegradável</p>
               </div>

               <div className="nossos__prod__unid">
                    <div className="nossos__prod__unid__text">
                    <p>Quantidade mínima </p>
                    <p>Preço unitário: </p>
                    <p>Preço atacado: </p>
                    </div>
                    <div className="nossos__prod__unid__val">
                    <p>50 unidades</p>
                    <p>R$ 35,90</p>
                    <p>R$ 28,90</p>
                    </div>
                </div>
            <div className="btn__solCot">
           <Link className="btn" to="#"> <BsFillCalculatorFill /> Solicitar Cotação </Link>
           </div>
        </div>
   

   </div>

</div>
    )
}

export default ProdutosPopulares;