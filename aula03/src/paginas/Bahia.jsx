import {Link} from "react-router-dom";
export default function Bahia()
{
  return(
    <div>
      <h1>Aula 03 - Estado da Bahia</h1>
      <div className="conteudo">
      <img src="/BA.png"/>
      <p>A Bahia tem Salvador como capital e é o maior estado da Região Nordeste. Sua economia é diversificada, com agricultura, indústria, comércio, mineração, turismo e serviços. O estado possui grande diversidade cultural e natural, com praias, áreas de Caatinga e regiões de Cerrado.</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>

  )
};