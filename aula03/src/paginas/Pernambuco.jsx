import {Link} from "react-router-dom";
export default function Pernambuco()
{
  return(
    <div>
      <h1>Aula 03 - Estado de Pernambuco </h1>
      <div className="conteudo">
      <img src="/PE.png"/>
      <p>Pernambuco tem Recife como capital e apresenta uma economia diversificada, com destaque para comércio, indústria, agricultura, serviços e turismo. O estado possui praias famosas, cidades históricas e forte importância cultural.</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>

  )
};