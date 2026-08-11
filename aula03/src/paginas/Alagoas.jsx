import {Link} from "react-router-dom";
export default function Alagoas()
{
  return(
    <div>
      <h1>Aula 03 - Estado do Alagoas</h1>
      <div className="conteudo">
      <img src="/AL.png"/>
      <p>Alagoas tem Maceió como capital e destaca-se pela agricultura, indústria, comércio, turismo e produção de cana-de-açúcar. O estado é conhecido pelas praias, piscinas naturais e belas paisagens litorâneas.</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>

  )
};