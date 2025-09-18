
import './nossaEquipe.css';
import fotoCEO from './assets/Background.png';
import fotoCTO from './assets/Background1.png';
import fotoDir from './assets/Background2.png';

function nossaEquipe() {
    return (
        <div className='nossaEquipe'>

            <div className='nossaEquipe__container'>

                <div className='nossaEquipe__Text'>
                    <h2>Nossa Equipe</h2>
                    <p>Conheça as pessoas apaixonadas que tornam a EcoVive possível</p>
                </div>
                <div className='items'>
                    <div className='item'>
                        <div className='item__img'>
                            <img src= { fotoCEO } alt='' />
                        </div>
                        <div className='item__text'>
                            <h4>Ana Rodrigues</h4>
                            <h5>CEO & Fundadora</h5>
                            <p>Especialista em sustentabilidade com 15 anos de <br/>
                            experiência em negócios verdes.</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item__img'>
                            <img src= { fotoCTO } alt='' />
                        </div>
                        <div className='item__text'>
                            <h4>Carlos Mendes</h4>
                            <h5>CTO</h5>
                            <p>Desenvolvedor apaixonado por tecnologia sustentável  <br/>
                             e inovação.</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item__img'>
                            <img src= { fotoDir } alt='' />
                        </div>
                        <div className='item__text'>
                            <h4>Mariana Costa</h4>
                            <h5>Diretora de Parcerias</h5>
                            <p>Responsável por identificar e integrar marcas <br/>
                            sustentáveis à nossa plataforma.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default nossaEquipe;