import {Link} from "react-router-dom";
export default function Parana()
{
  return(
    <div>
      <h1>Aula 03 - Estado do Paraná</h1>
      <div className="conteudo">
      <img src="/PR.png"/>
      <p>O Paraná é um estado localizado na Região Sul do Brasil, tendo Curitiba como sua capital. Sua economia é baseada na agricultura, pecuária, indústria e comércio, destacando-se na produção de soja, milho, trigo e criação de gado. O estado possui importantes atrações naturais, como as Cataratas do Iguaçu, além de áreas de Mata Atlântica e diversos rios. O Paraná também apresenta clima subtropical e possui grande importância econômica para o país.
</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>

  )
};