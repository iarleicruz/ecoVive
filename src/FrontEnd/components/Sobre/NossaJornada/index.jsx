
import './nossaJornada.css';

function NossaJornada (){
    return (
        <div className='nossaJornada'>
             <div className='nossaJornada__container'>

                <div className='nossaJornada__Text'>
                    <h2>Nossa Jornada</h2>
                    <p>Desde nossa fundação, temos trabahado incansavelmente para criar um <br/>
                    futuro mais sustentável através do comércio consciente.</p>
                </div>

                <div className='nossaJornada__items'>
                    <div className='nossaJornada__div__1'>
                        <div>
                            <span>2021</span>
                            <h4> Fundação Ecovive</h4>
                            <p>Nascemos com a missão de democratizar o acesso a produtos<br/> sustentáveis no Brasil.</p>
                        </div>
                        <div>
                            <span>2023</span>
                            <h4> Expansão B2B</h4>
                            <p>Lançamos nossa divisão B2B para atender empresas comprometidas com  <br/> a sustentbilidade.</p>
                        </div>
                        <div>
                            <span>2025</span>
                            <h4> Impacto Nacional</h4>
                            <p>Alcançamos mais de 100.000 clientes e evitamos 50 toneladas <br/> de resíduos.</p>
                        </div>
                   
                    </div>
                   
                    <div className='nossaJornada__div__2'>
                         <div>
                            <span>2022</span>
                            <h4> Primeiros Parceiros</h4>
                            <p>Estabelecemos parcerias com 50 marcas sustentáveis e lançamos <br/> nossa plataforma.</p>
                        </div>
                         <div>
                            <span>2024</span>
                            <h4> Certificação Verde</h4>
                            <p>Obtivemos certificações ambientais e expandimos para mais<br/> de 500 produtos.</p>
                        </div>
                    </div>

                </div>
             </div>

        </div>
    )
}

export default NossaJornada;