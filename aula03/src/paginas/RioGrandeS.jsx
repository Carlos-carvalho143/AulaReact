import {Link} from "react-router-dom";
export default function RioGrandeS()
{
  return(
    <div>
      <h1>Aula 03 - Estado do Rio Grande do Sul</h1>
      <div className="conteudo">
      <img src="/RS.png"/>
      <p>O Rio Grande do Sul é um estado localizado na Região Sul do Brasil, tendo Porto Alegre como sua capital. Sua economia destaca-se pela agricultura, pecuária, indústria e produção de vinhos, com cultivos como soja, arroz, trigo e uva. O estado possui paisagens variadas, incluindo campos, serras e praias, além de uma forte influência das culturas europeias. Seu clima é predominantemente subtropical, com temperaturas mais baixas durante o inverno.</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>

  )
};