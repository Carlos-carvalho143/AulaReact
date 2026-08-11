import {Link} from "react-router-dom";
export default function Paraiba()
{
  return(
    <div>
      <h1>Aula 03 - Estado do Paraíba</h1>
      <div className="conteudo">
      <img src="/PB.png"/>
      <p>A Paraíba tem João Pessoa como capital e possui economia baseada na agricultura, indústria, comércio, serviços e turismo. É conhecida por suas praias e por possuir uma das capitais mais antigas do Brasil.</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>

  )
};