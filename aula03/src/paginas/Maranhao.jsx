import {Link} from "react-router-dom";
export default function Maranhao()
{
  return(
    <div>
      <h1>Aula 03 - Estado do Maranhão</h1>
      <div className="conteudo">
      <img src="/MA.png"/>
      <p>O Maranhão tem São Luís como capital e possui uma economia baseada na agricultura, pecuária, indústria, mineração e comércio. O estado apresenta áreas de Amazônia, Cerrado e Caatinga e possui importantes atrações naturais, como os Lençóis Maranhenses.</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>

  )
};