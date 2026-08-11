import {Link} from "react-router-dom";
export default function Goias()
{
  return(
    <div>
      <h1>Aula 03 - Estado de Goiás</h1>
      <div className="conteudo">
      <img src="/GO.png"/>
      <p>Goiás é um estado localizado na região Centro-Oeste do Brasil, tendo Goiânia como sua capital. O estado possui grande importância econômica, principalmente pela agricultura e pecuária, destacando-se na produção de soja, milho, cana-de-açúcar e criação de gado. Goiás apresenta clima tropical, com períodos bem definidos de chuva e seca, e sua vegetação predominante é o Cerrado. O estado também possui importantes rios, cachoeiras e áreas naturais, além de cidades históricas, como Goiás e Pirenópolis. Sua população e economia cresceram bastante nas últimas décadas, tornando Goiás um dos principais estados do Centro-Oeste brasileiro.
</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>

  )
};