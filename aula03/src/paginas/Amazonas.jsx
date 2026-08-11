import {Link} from "react-router-dom";
export default function Amazonas()
{
  return(
    <div>
      <h1>Aula 03 - Estado do Amazonas</h1>
      <div className="conteudo">
      <img src="/AM.png"/>
      <p>O Amazonas é o maior estado brasileiro em extensão territorial e tem Manaus como capital. Sua economia destaca-se pela indústria, principalmente pela Zona Franca de Manaus, além do extrativismo e do turismo. Possui grande parte da Floresta Amazônica e importantes rios.</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>

  )
};