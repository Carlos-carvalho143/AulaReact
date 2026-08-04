import {Link} from "react-router-dom";
export default function SaoPaulo()
{
  return(
    <div>
      <h1>Aula 03 - Estado de São Paulo</h1>
    <div className="conteudo">
      <img src="/SP.png"/>
      <p>O estado de São Paulo, localizado na Região Sudeste do Brasil, é o mais populoso do país, com cerca de 46 milhões de habitantes, e possui a maior economia nacional. Sua capital, a cidade de São Paulo, é um dos principais centros financeiros, culturais e tecnológicos da América Latina. Com aproximadamente 248.200 km² de área e 645 municípios, o estado se destaca pela diversidade de suas atividades econômicas, incluindo indústria, comércio, serviços, agronegócio e inovação tecnológica. Além da força econômica, São Paulo reúne importantes universidades, centros de pesquisa e uma ampla infraestrutura de transportes. O estado também oferece grande variedade de atrações turísticas, como praias no litoral, áreas de preservação ambiental, cidades históricas e uma rica cena cultural e gastronômica, consolidando sua importância para o desenvolvimento econômico, social e cultural do Brasil.</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>
  )
};