import HeroProdutos from '../components/Produtos/HeroProdutos';
import EcoviveProdutos from '../components/Produtos/EcoviveProdutos'
import TransEmpresas from '../components/Produtos/TransEmpresas'
import NossosProdutos from '../components/Produtos/NossosProdutos'


function Produtos(){
    return(
          <div>
             <HeroProdutos />
           <EcoviveProdutos />
           <NossosProdutos />
           <TransEmpresas />
          </div>
    )
}
export default Produtos;