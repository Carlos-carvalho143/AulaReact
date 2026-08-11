import {Link} from "react-router-dom";
export default function Rondonia()
{
  return(
    <div>
      <h1>Aula 03 - Estado da Rondônia</h1>
      <div className="conteudo">
      <img src="/RO.png"/>
      <p>Rondônia tem Porto Velho como capital e destaca-se pela agricultura, pecuária, mineração e produção de energia. O estado possui áreas de Floresta Amazônica e clima quente e úmido.</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>

  )
};