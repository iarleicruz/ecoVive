import './perguntFreq.css';

function PerguntasFreq(){
    return (

        <div className='pergFrequentes__container'>
      
            <div className='pergFrequentes'>
                <h4>Perguntas Frequentes</h4>
                <p>Encontre respostas para as dúvidas mais comuns sobre nossos produtos e serviços</p>
            <div className='pergFrequentes_perg'>
                <h6> Como posso ter certeza de que os produtos são realamente sustentáveis?</h6>
                <p>Todos os produtos em nossa plataforma passam por um rigoroso processo de verificação. Exigimos <br/>
                certificações ambientais e auditamos regulamente nossos fornecedores para garantir que atendam aos nossos <br/>
                padrões de sustentabilidade.</p>
            </div>
            <div className='pergFrequentes_perg'>
                <h6> Vocês oferecem frete grátis?</h6>
                <p>Sim! Oferecemos frete grátis para compras acima de R$ 99,00 em todo o BRasil. PAra compras menores, calculamos o frete de acordo com a localização e peso dos produtos.</p>
            </div>
            <div className='pergFrequentes_perg'>
                <h6> Como funciona a política de devolução?</h6>
                <p>Você tem até 30 dias para devolver qualquer produto, desde que esteja em perfeitas condições. O processo é  <br />simples e gratuito - basta entrar em contato conosco que organizamos a coleta.</p>
            </div>
            <div className='pergFrequentes_perg'>
                <h6> Vocês atentem empresas (B2B)?</h6>
                <p>Sim! Temos uam divisão especializada em antender as empresas em soluções sustentáveis em grande escala.
                    Entre em contato conosco para conhecer nossas condições especiais para pessoa juridíca <br/>.</p>
            </div>
            <div className='pergFrequentes_perg'>
                <h6> Como posso me tornar um fornecedor da EcoVive?</h6>
                <p>Estamos sempre em busca de novos parceiros sustentáveis. Entre em contato através do nosso formulário ou <br/>
                ou email, e nossa equipe de parcerias avaliará se sua marca está alinhada con nossos valores.</p>
            </div>
            </div>
        </div>

    )
}

export default PerguntasFreq;