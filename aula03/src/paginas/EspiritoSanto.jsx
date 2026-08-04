import {Link} from "react-router-dom";
export default function EspiritoSanto()
{
  return(
    <div>
      <h1>Aula 03 - Estado do Espírito Santo</h1>
      <div className="conteudo">
      <img src="/ES.png"/>
      <p>O estado do Espírito Santo está localizado na Região Sudeste do Brasil e tem como capital a cidade de Vitória. É conhecido por seu extenso litoral, belas praias e importante atividade portuária, com destaque para os portos de Vitória e Tubarão. Sua economia é baseada na produção de petróleo e gás, mineração, siderurgia, agricultura e comércio. O estado também se destaca pela produção de café, especialmente o café conilon, sendo um dos maiores produtores do país. Além de sua relevância econômica, o Espírito Santo possui rica diversidade cultural, influenciada por povos indígenas, africanos, europeus e imigrantes italianos e alemães, além de belas paisagens naturais que atraem turistas durante todo o ano.</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>
  )
};