import {Link} from "react-router-dom";
export default function Roraima()
{
  return(
    <div>
      <h1>Aula 03 - Estado do Roraima</h1>
      <div className="conteudo">
      <img src="/RR.png"/>
      <p>Roraima tem Boa Vista como capital e é o estado mais ao norte do Brasil. Sua economia envolve agricultura, pecuária, comércio e serviços. O estado possui áreas de floresta, savanas e belas paisagens naturais.</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>

  )
};