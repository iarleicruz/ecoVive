
import Hero from '../components/Hero';
import Categorias from '../components/Categorias';
import ProdPop from '../components/ProdutosPopulares';
import Solucoes from '../components/Solucoes';
import NossosClientes from '../components/NossosClientes';
import Footer from '../components/Footer';

function Home(){
    return(
        <div>
         <Hero /> 
         <Categorias /> 
         <ProdPop /> 
         <Solucoes /> 
         <NossosClientes /> 
         <Footer /> 
           
        </div>
                   
                
    )
}

export default Home;