
import Hero from '../components/Home/Hero';
import Categorias from '../components/Home/Categorias';
import ProdPop from '../components/Home/ProdutosPopulares';
import Solucoes from '../components/Home/Solucoes';
import NossosClientes from '../components/Home/NossosClientes';



function Home(){
    return(
        <div>
         <Hero /> 
         <Categorias /> 
         <ProdPop /> 
         <Solucoes /> 
         <NossosClientes /> 
           
        </div>
                   
                
    )
}

export default Home;