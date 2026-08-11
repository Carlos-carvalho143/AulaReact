import {Link} from "react-router-dom";
export default function Sergipe()
{
  return(
    <div>
      <h1>Aula 03 - Estado do Sergipe</h1>
      <div className="conteudo">
      <img src="/SE.png"/>
      <p>Sergipe é o menor estado brasileiro em extensão territorial e tem Aracaju como capital. Sua economia envolve agricultura, indústria, petróleo, gás, comércio e turismo. Possui praias e áreas de Caatinga e Mata Atlântica.</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>

  )
};