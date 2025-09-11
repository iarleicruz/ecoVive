import './transEmpresas.css';
import { Link } from "react-router-dom";
import { BsFillCalculatorFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";


function TransEmpresas(){
    return(

   
   <div className='transEmp'>
         <div className='transEmp__text'>
            <h4>Pronto para Transformar sua Empresa?</h4>
            <p>Entre em contato conosco e descubra como podemos ajudar sua empresa a  <br />
            ser mais sustentável e competitiva</p>
        <Link className="btn__solCot" to="#"><BsFillCalculatorFill/> Solicitar Cotação Personalizada  </Link>
        <Link className="btn__falEsp" to="#"><FaPhoneAlt/> Falar com Especialista  </Link>
      </div>
           
</div>

    )
}

export default TransEmpresas;