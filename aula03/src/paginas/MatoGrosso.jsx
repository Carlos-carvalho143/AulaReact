import {Link} from "react-router-dom";
export default function MatoGrosso()
{
  return(
    <div>
      <h1>Aula 03 - Estado do Mato Grosso</h1>
      <div className="conteudo">
      <img src="/MT.png"/>
      <p>Mato Grosso é um estado localizado na região Centro-Oeste do Brasil, tendo Cuiabá como sua capital. É um dos maiores estados brasileiros em extensão territorial e possui uma economia baseada principalmente na agricultura e na pecuária, destacando-se na produção de soja, milho, algodão e na criação de gado. O estado possui uma grande diversidade natural, com áreas de Cerrado, Amazônia e Pantanal, sendo conhecido por sua rica biodiversidade e por importantes rios. Mato Grosso também apresenta clima tropical, com períodos de chuva e seca bem definidos. Sua importância econômica e ambiental é muito grande, principalmente pela produção agrícola e pela presença de áreas naturais de grande valor.</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>

  )
};