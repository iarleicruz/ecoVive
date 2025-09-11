import './nossoCompromisso.css';
import nossoComp from './assets/Compromisso com Sustentabilidade.png';
import cert from './assets/Overlay.png';
import people from './assets/Overlay-1.png';
import fol from './assets/Overlay-2.png';

function nossoCompromisso(){
    return (
        <div className='nossoCompromisso'>

        <div className='nossoCompromisso__container'>

            <div className='nossoCompromisso__text'>
                <h2>Nosso Compromisso com <br /> a sustentabilidade</h2>
            <div className='nossoCompromisso__item'>
                <div className='nossoCompromisso__item__img'>
                    <img src= { cert } alt=''/>
                </div>
                <div className='nossoCompromisso__item__text'>
                    <h4>Certificações Rigorosas</h4>
                    <p>Todos os produtos passam por um processo rogoroso de verificação de <br />
                    sustentabilidade antes de serem listados em nossa plataforma.</p>
                </div>
             </div>
               <div className='nossoCompromisso__item'>
                    <div className='nossoCompromisso__item__img'>
                        <img src= { people } alt=''/>
                    </div>
                    <div className='nossoCompromisso__item__text'>
                        <h4>Parcerias Éticas</h4>
                        <p>Trabalhamos apenas com marcas que compartilham nossos valores de <br/> responsabilidade social e ambiental.</p>
                    </div>
                 </div>
                   <div className='nossoCompromisso__item'>
                    <div className='nossoCompromisso__item__img'>
                        <img src= { fol } alt=''/>
                    </div>
                <div className='nossoCompromisso__item__text'>
                    <h4>Impacto Mensurável</h4>
                    <p>Medimos e reportamos regularmente o impacto ambiental positivo <br/>gerado através de nossa plataforma.</p>
                </div>
               
            </div>
         

            </div>
            <div className='nossoCompromisso__img'>
                <img src= {nossoComp} alt='' />
            </div>
        </div>
        </div>
    )
}
export default nossoCompromisso;