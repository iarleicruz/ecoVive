import './ecoViveProdutos.css';
import imgSet from './assets/Background.png';
import imgCaix from './assets/Background1.png';
import imgCert from './assets/Background2.png';
import imgFol from './assets/Background3.png';

function EcoviveB2B(){
    return(
<div className='ecovive'>
   <h1>Por que Escolher a EcoVive?</h1>
   <p>Oferecemos muito mais que produtos sustentáveis - somos seu parceiro na <br/>jornada rumo à sustentatbilidade corporativa</p>

   <div className='ecovive__items'>
    
        <div>
            <img src={ imgSet } alt="" />
            <h4>Preços Competitivos</h4>
            <p>Descontos progressivos <br/> baseados no volume de compra</p>
        </div>
        <div>
            <img src={ imgCaix } alt="" />
            <h4>Entrega Programada</h4>
            <p>Entregas regulares conforme<br/> sua necessidade </p>
        </div>
        <div>
            <img src={ imgCert } alt="" />
            <h4>Consultoria Especializada</h4>
            <p>Suporte técnico para <br/>implementação sustentável</p>
        </div>
        <div>
            <img src={ imgFol } alt="" />
            <h4>Relatórios de impacto</h4>
            <p>Documentação do impacto <br/> ambiental positivo</p>
        </div>
     


   </div>

</div>

    )
}

export default EcoviveB2B;