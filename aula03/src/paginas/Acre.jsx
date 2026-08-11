import {Link} from "react-router-dom";
export default function Acre()
{
  return(
    <div>
      <h1>Aula 03 - Estado do Acre</h1>
      <div className="conteudo">
      <img src="/AC.png"/>
      <p>O Acre é um estado localizado na Região Norte do Brasil, tendo Rio Branco como capital. Sua economia está ligada à agricultura, pecuária, extrativismo e comércio. Possui grande área de Floresta Amazônica e apresenta clima quente e úmido.</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>

  )
};