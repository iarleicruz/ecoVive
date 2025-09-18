
import './sobreItems.css';

import overlay from './assets/Overlay.png';
import overlay1 from './assets/Overlay-1.png';
import overlay2 from './assets/Overlay-2.png';
import fol from './assets/fol.png';
import cor from './assets/cor.png';
import cert from './assets/cert.png';
import glob from './assets/glob.png';

function SobreItem(){
    return(
      
            <div className="sobre__container">
               

                   <div className='sobre__items'>
        
                        <div>
                            <img src={ overlay } alt="" />
                            <h4>Nossa Missão</h4>
                            <p>Democratizar o acesso a produtos sustentáveis, <br/> 
                            facilitando escolhas conscientes que beneficiem o <br/>meio ambiente e a sociedade.</p>
                        </div>
                        <div>
                            <img src={ overlay1 } alt="" />
                            <h4>Nossa Visão</h4>
                            <p>Ser a principal plataforma de produtos sustentáveis <br/> no Brasil, inspirando uma nova geração de <br />
                            consumidores conscientes.</p>
                        </div>
                        <div>
                            <img src={ overlay2 } alt="" />
                            <h4>Nossos Valores</h4>
                            <p>Transparência, sustentabilidade, qualidade e <br/> responsabilidade sociam guiam todas as nossas <br />
                            decições e parcerias.</p>
                        </div>
                       
                    
                </div>

                      <div className='sobre__items__2'>
        
                        <div>
                            <img src={ fol } alt="" />
                            <h4>Sustentabilidade</h4>
                            <p>Comprometidos com práticas que <br/> preservam o meio ambiente para as <br /> futuras gerações.</p>
                        </div>
                        <div>
                            <img src={ cor } alt="" />
                            <h4>Responsabilidade Social</h4>
                            <p>Apoiamos comunidades locais e <br/> práticas de comércio justo em toda <br/> nossa cadeia.</p>
                        </div>
                        <div>
                            <img src={ cert } alt="" />
                            <h4>Qualidade</h4>
                            <p>Selecionamos apenas produtos de <br/> alta qualidade que atendem ais maus <br /> rigorosos padrões.</p>
                        </div>
                        <div>
                            <img src={ glob } alt="" />
                            <h4>Impacto Global</h4>
                            <p>Cada compra contribui para um <br/> impacto positivo do planeta <br/> e na sociedade.</p>
                        </div>
                    
                </div>
            </div>
           
              
                
    )
}

export default SobreItem;