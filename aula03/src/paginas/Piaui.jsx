import {Link} from "react-router-dom";
export default function Piaui()
{
  return(
    <div>
      <h1>Aula 03 - Estado do </h1>
      <div className="conteudo">
      <img src="/PI.png"/>
      <p>O Piauí tem Teresina como capital e destaca-se pela agricultura, pecuária e mineração. Grande parte de seu território possui vegetação de Caatinga e Cerrado. O estado também possui importantes sítios arqueológicos.</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>

  )
};