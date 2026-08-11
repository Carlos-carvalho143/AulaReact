import {Link} from "react-router-dom";
export default function Amapa()
{
  return(
    <div>
      <h1>Aula 03 - Estado do Amapá</h1>
      <div className="conteudo">
      <img src="/AP.png"/>
      <p>O Amapá tem Macapá como capital e está localizado no extremo norte do Brasil. Sua economia envolve mineração, agricultura, pesca e serviços. Grande parte de seu território é formada por áreas de floresta e preservação ambiental.</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>

  )
};