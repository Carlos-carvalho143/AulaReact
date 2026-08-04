import {Link} from "react-router-dom";
export default function MinasGerais()
{
  return(
    <div>
      <h1>Aula 03 - Estado de Minas Gerais</h1>
      <div className="conteudo">
      <img src="/MG.png"/>
      <p>O estado de Minas Gerais está localizado na Região Sudeste do Brasil e tem como capital a cidade de Belo Horizonte. É o segundo estado mais populoso do país e possui um dos maiores territórios da região. Sua economia é bastante diversificada, destacando-se a mineração, a agropecuária, a indústria, o comércio e os serviços. Minas Gerais é reconhecido pela produção de minério de ferro, café, leite e queijo, além de seu importante patrimônio histórico, representado por cidades como Ouro Preto, Tiradentes e Diamantina. O estado também é conhecido por sua rica culinária, tradições culturais e belas paisagens naturais, sendo um importante destino turístico e um dos principais contribuintes para a economia brasileira.</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>

  )
};