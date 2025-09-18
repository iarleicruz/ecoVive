import HeroB2B from '../components/ProdutosB2B/HeroB2B';
import EcoviveB2B from '../components/ProdutosB2B/EcoviveB2B'
import TransEmpresas from '../components/ProdutosB2B/TransEmpresas'
import NossosProdutosB2B from '../components/ProdutosB2B/NossosProdutosB2B'


function Prodb2b(){
    return(
          <div>
             <HeroB2B />
           <EcoviveB2B />
           <NossosProdutosB2B />
           <TransEmpresas />
          </div>
    )
}
export default Prodb2b;