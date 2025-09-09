import './formasContato.css'
import email from './assets/Email.png'
import local from './assets/Local.png'
import tel from './assets/Telefone.png'
import relogio from './assets/Overlay.png'
import { Link } from 'react-router-dom';
import { FiSend } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";


function formaContato(){
    return(
<div className='formaContato__container'>
  

     <div className='formaContato__contato__items'>
        
            <div>
                <img src={ email } alt="" />
                <h4>Email</h4>
                <p><span>contato@ecovive.com.br </span><br/>Resposta em até 24 horas</p>
            </div>
            <div>
                <img src={ tel } alt="" />
                <h4>Telefone</h4>
                <p><span>(11) 9999-9999</span><br/> seg-Sex: 9h às 18h </p>
            </div>
            <div>
                <img src={ local } alt="" />
                <h4>Endereço</h4>
                <p><span>São Paulo, SP</span> <br/>Brasil</p>
            </div>
            <div>
                <img src={ relogio } alt="" />
                <h4>Horário de Atendimento</h4>
                <p><span>Segunda a Sexta</span> <br/> 9h às 18h</p>
            </div>
        
       </div>

      <div className='formContato'>
            <form>
              <h4>Envie sua Mensagem</h4>
               
            <label>Nome Completo</label>
            <input type='text' name='name' placeholder="Seu nome completo" />
            <label>Email</label>
            <input type='email' name='name' placeholder="Digite seu e-mail" />
            <label>Assunto</label>
            <input type='text' name='name' placeholder="Selecione um assunto" />
            <label>Mensagem</label>
            <textarea placeholder="Escreva uma mensagem aqui..." />
            <Link className='btn__envMensagem'> <FiSend /> Enviar Mensagem </Link>

            </form>
        

             <div className='outrasFormasContato'>
                <h4>Outras Formas de Contato</h4>

                <div className='chatOnline'>
                    <h5> <FiMessageCircle/> Chat Online</h5>
                    <p>Converse conosco em tempo real através do nosso chat online. Disponível <br/>
                    de segunda a sexta, das 9h às 18h.</p>
                    <Link className='btn__inChat'>Iniciar Chat </Link>

                </div>
                <div className='redesSociais'>
                    <h5> Redes Sociais</h5>
                    <p>Siga-nos nas redes sociais para ficar por dentro das novodades <br />
                     e promoções especiais.</p>
                    <Link className='btn__facebook'>Facebook </Link>
                    <Link className='btn__instagram'> Instagram</Link>
                    <Link className='btn__x'>X </Link>

                </div>
                    <div className='newsletter'>
                        <h5> Newsletter</h5>
                        <p>Receba novidades sobre produtos sustentáveis e dicas <br />
                        de consumo consciente.</p>
                        <input type='email' placeholder='Seu email' /> 
                        <Link className='btn__insc'>Inscrever </Link>
                    
                    </div>
             </div>
        </div>
   </div>



    )
}

export default formaContato;