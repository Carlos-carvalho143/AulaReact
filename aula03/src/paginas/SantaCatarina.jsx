import {Link} from "react-router-dom";
export default function SantaCatarina()
{
  return(
    <div>
      <h1>Aula 03 - Estado de Santa Catarina</h1>
      <div className="conteudo">
      <img src="/SC.png"/>
      <p>Santa Catarina é um estado localizado na Região Sul do Brasil, tendo Florianópolis como sua capital. Sua economia é diversificada, com destaque para a indústria, agricultura, pecuária, pesca e turismo. O estado é conhecido por suas belas praias, serras e cidades de influência cultural europeia. Santa Catarina possui clima subtropical e apresenta paisagens naturais variadas, sendo um importante destino turístico do Brasil.
</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>

  )
};