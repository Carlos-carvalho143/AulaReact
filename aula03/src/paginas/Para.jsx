import {Link} from "react-router-dom";
export default function Para()
{
  return(
    <div>
      <h1>Aula 03 - Estado do Para</h1>
      <div className="conteudo">
      <img src="/PA.png"/>
      <p>O Pará tem Belém como capital e possui uma economia baseada na mineração, agricultura, pecuária, indústria e extrativismo. É um dos principais estados da Amazônia e possui grande diversidade de rios, florestas e espécies de animais e plantas.</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>

  )
};