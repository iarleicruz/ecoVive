import './nossosClientes.css';
import imgEst from './assets/estrelas.png';


function NossosClientes(){
    return(
<div className='clientes'>
    
   
     <h2>O que nossos clientes dizem</h2>
   <div className='clientes__text'>
        <div>
            <img src={ imgEst } alt="" />
             
            <p>"Produtos de excelente qualidade e realmente <br /> sustentáveis. Recomendo!"</p>
              <h4>Maria Silva</h4>
            <span>Cliente B2C</span>
        </div>
        <div>
            <img src={ imgEst } alt="" />
           
            <p>"Parceria perfeita para nossa empresa. <br /> Produtos sustentáveis com ótimo <br /> custo benefício."</p>
              <h4>João Santos</h4>
            <span>Gerente de Compras</span>
        </div>
        <div>
            <img src={ imgEst } alt="" />
           
            <p>"Finalmente um marketplace que realmente <br/> se peocupa com o meio ambiente"</p>
            <h4>Ana Costa</h4>
            <span>Consumidores Consciente</span>
        </div>
      


   </div>

</div>

    )
}

export default NossosClientes;