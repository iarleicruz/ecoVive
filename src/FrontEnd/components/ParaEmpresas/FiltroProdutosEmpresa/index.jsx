import { Link } from "react-router-dom";
import { CiShoppingCart } from 'react-icons/ci';
import imgCopo from './assets/copo.png';
import imgProdHig from './assets/produtosHigiene.png';
import imgProdLimp from './assets/produtosLimpeza.png';
import imgUtens from './assets/utensilios.png';
import imgEstrelas from './assets/estrelas.png';
import imgEsgotado from './assets/esgotado.png';
import imgCamiseta from './assets/camiseta.png';
import imgBolsa from './assets/bolsa.png';
import imgTal from './assets/talheres.png';
import { VscCircleFilled } from "react-icons/vsc";
import imgfilter from './assets/filter.png'
import imgSearch from './assets/search.png'
import './filtroProdutosEmpresa.css';

function FiltrosBuscaProdutos() {
    return(
        <div className='filtrosBuscaProdutos'>
            
           <p className="qtde__produtos">Mostrando 8 produtos</p>

            <div className='filtrosBuscaProdutos__container'>
                <div className='filtrosBuscaProdutos__filtro'>
                       <div className="filtro">
                        <img src={ imgfilter } alt="" />
                        <h2>Filtros</h2>
                       </div>
                       <div className="buscaProd">
                        <p>Buscar Produtos</p>
                        <img src= { imgSearch } alt=""/>
                        <input type="text" /> 
                       </div>

                       <div className="categoria">
                        <p>Categoria</p>
                         <div>
                            <input type="radio" id="dewey" name="drone" value="dewey" checked/>
                            <label for="dewey">Todos os Produtos</label>
                         </div>
                         <div>
                            <input type="radio" id="" name="" value="" />
                            <label for="">Modo Sustentável</label>
                         </div>
                         <div>
                            <input type="radio" id="" name="" value="" />
                            <label for="">Casa & Decoração</label>
                         </div>
                         <div>
                            <input type="radio" id="" name="" value="" />
                            <label for="">Beleza Natural</label>
                         </div>
                         <div>
                            <input type="radio" id="" name="" value="" />
                            <label for="">Alimentação</label>
                         </div>
                         <div>
                            <input type="radio" id="" name="" value="" />
                            <label for="">Higiene Pessoal</label>
                         </div>
                         <div>
                            <input type="radio" id="" name="" value="" />
                            <label for="">Produtos Reciclados</label>
                         </div>

                       </div>



                        <div className="faixaPreco">
                        <p>Faixa de Preço</p>
                         <div>
                            <input type="radio" id="" name="" value="" checked />
                            <label for="">Todos os Preços</label>
                         </div>
                         <div>
                            <input type="radio" id="" name="" value="" />
                            <label for="">Até R$ 50</label>
                         </div>
                         <div>
                            <input type="radio" id="" name="" value="" />
                            <label for="">R$ 50 - R$ 100</label>
                         </div>
                         <div>
                            <input type="radio" id="" name="" value="" />
                            <label for="">R$ 100 - R$ 200</label>
                         </div>
                         <div>
                            <input type="radio" id="" name="" value="" />
                            <label for="">Acima de R$ 200</label>
                         </div>
                        
                       </div>

                       <div className="ordenado">
                        <p>Ordenar por</p>
                         <select name="selectedPopularidade">
                           <option value="popularidade">Popularidade</option>
                           <option value="Menor">Menor Preço</option>
                           <option value="Maior">Maior Preço</option>
                           <option value="Melhor">Melhor Avaliação</option>
                           <option value="Mome">Mome A-Z</option>
                           </select>
                       </div>
                </div>
                       
                                  
                <div className='filtrosBuscaProdutos__items'>
                    <div>
                        <img className="filtrosBuscaProdutos__item__img" src={ imgCopo } alt="" />
                        <h4>Copo Reutilizável de Bambu</h4>
                        <h6 className="descricao"> Copo ecológico feito de bambu <br /> natural, perfeito para bebidas.</h6>
                        <img className="imgEstrelas" src= { imgEstrelas } alt="" />
                        <span>(4.8) < VscCircleFilled style={{ fontSize: '8px' }}/> 124 avaliações </span>
                        <p className="preco">R$ 29,90 <span>R$ 39,90</span></p>
                        
                    <Link className="addCar" to="#"> <CiShoppingCart className="iconCar"/> Adicionar ao Carrinho </Link>
                    </div>
                    
                    <div>
                        <img className="filtrosBuscaProdutos__item__img" src={ imgProdHig } alt="" />
                        <h4>Kit Produtos de Higiene <br/> Sustentável</h4>
                        <h6 className="descricao"> Kit completo com shampoo sólido, <br /> sabonete natural e escova de bambu.</h6>
                        <img className="imgEstrelas" src= { imgEstrelas } alt="" />
                        <span>(4.9)< VscCircleFilled style={{ fontSize: '8px' }}/> 89 avaliações </span>
                            <p className="preco">R$ 89,90  <span>R$ 119,90</span></p>
                                
                    <Link className="addCar" to="#"> <CiShoppingCart className="iconCar"/> Adicionar ao Carrinho  </Link>
                    </div>

                        <div>
                            <img className="filtrosBuscaProdutos__item__img" src={ imgUtens } alt="" />
                            <h4>Utensílios de Cozinha <br/> Ecológicos</h4>
                             <h6 className="descricao">Conjunto de Utensílios de cozinha <br/> feito de materiais sustentáveis.</h6>
                            <img className="imgEstrelas" src= { imgEstrelas } alt="" />
                            <span>(4.7)< VscCircleFilled style={{ fontSize: '8px' }}/> 67 avaliações </span>
                           <p className="preco">R$ 149,90  <span>R$ 199,90</span></p>
                        <Link className="addCar" to="#"> <CiShoppingCart className="iconCar"/> Adicionar ao Carrinho  </Link>
                        </div>
                            
                        <div>
                            <img className="filtrosBuscaProdutos__item__img" src={ imgProdLimp } alt="" />
                                <h4>Produtos de Limpeza <br/> Naturais</h4>
                                  <h6 className="descricao">Kit de produtos de limpeza <br/> biodegradáveis e não tóxicos.</h6>
                            <img className="imgEstrelas" src= { imgEstrelas } alt="" />
                            <span>(4.6)< VscCircleFilled style={{ fontSize: '8px' }}/> 156 avaliações </span>
                             <p className="preco">R$ 59,90 <span>R$ 79,90</span></p>
                        <Link className="addCar" to="#"> <CiShoppingCart className="iconCar"/> Adicionar ao Carrinho  </Link>
                        </div>
                        <div>
                            <img className="filtrosBuscaProdutos__item__img" src={ imgCamiseta } alt="" />
                                <h4>Camiseta de Algodão <br/> Orgânico</h4>
                                  <h6 className="descricao">Camiseta básica feita com 100% <br/> algodão orgânico certificado.</h6>
                            <img className="imgEstrelas" src= { imgEstrelas } alt="" />
                            <span>(4.6)< VscCircleFilled style={{ fontSize: '8px' }}/> 203 avaliações </span>
                             <p className="preco">R$ 79,90 <span>R$ 99,90</span></p>
                        <Link className="addCar" to="#"> <CiShoppingCart className="iconCar"/> Adicionar ao Carrinho  </Link>
                        </div>
                        <div>
                            <img className="filtrosBuscaProdutos__item__img" src={ imgEsgotado } alt="" />
                                <h4>Sabonete Artesanal Natural</h4>
                                  <h6 className="descricao">Sabonete artesanal com ingredientes <br/> naturais e óleos essenciais.</h6>
                            <img className="imgEstrelas" src= { imgEstrelas } alt="" />
                            <span>(4.6)< VscCircleFilled style={{ fontSize: '8px' }}/> 98 avaliações </span>
                             <p className="preco">R$ 24,90 <span>R$ 34,90</span></p>
                        <Link className="addCar" to="#"> <CiShoppingCart className="iconCar"/> Adicionar ao Carrinho  </Link>
                        </div>
                        <div>
                            <img className="filtrosBuscaProdutos__item__img" src={ imgBolsa } alt="" />
                                <h4>Bolsa Reutilizável de Juta</h4>
                                  <h6 className="descricao">Bolsa ecológica de juta natural, <br/> resistente e durável.</h6>
                            <img className="imgEstrelas" src= { imgEstrelas } alt="" />
                            <span>(4.6)< VscCircleFilled style={{ fontSize: '8px' }}/> 76 avaliações </span>
                             <p className="preco">R$ 39,90 <span>R$ 49,90</span></p>
                        <Link className="addCar" to="#"> <CiShoppingCart className="iconCar"/> Adicionar ao Carrinho  </Link>
                        </div>
                        <div>
                            <img className="filtrosBuscaProdutos__item__img" src={ imgTal } alt="" />
                                <h4>Kit Talheres de Bambu</h4>
                                 <h6 className="descricao">Kit portátil com garfo, faca, colher e <br/> canudo de bambu.</h6>
                            <img className="imgEstrelas" src= { imgEstrelas } alt="" />
                            <span>(4.6)< VscCircleFilled style={{ fontSize: '8px' }}/> 142 avaliações </span>
                             <p className="preco">R$ 34,90 <span>R$ 44,90</span></p>
                        <Link className="addCar" to="#"> <CiShoppingCart className="iconCar"/> Adicionar ao Carrinho  </Link>
                     
                        </div>

                </div>
                
                 
            </div>
               <div className="buttons">
                    <Link className="btn__ant" to="#">Anterior</Link>
                    <Link className="btn__1" to="#">1</Link>
                    <Link className="btn__2" to="#">2</Link>
                    <Link className="btn__3" to="#">3</Link>
                    <Link className="btn__prox" to="#">Próximo</Link>

                    </div>


        </div>
    )
}
export default FiltrosBuscaProdutos;