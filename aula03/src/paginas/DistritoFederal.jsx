import {Link} from "react-router-dom";
export default function DistritoFederal()
{
  return(
    <div>
      <h1>Aula 03 - Distrito Federal</h1>
      <div className="conteudo">
      <img src="/DF.png"/>
      <p>O Distrito Federal está localizado na região Centro-Oeste do Brasil e abriga Brasília, a capital federal. Foi criado em 1960, com a transferência da capital do Rio de Janeiro para o centro do país. Diferentemente dos estados, o Distrito Federal não possui municípios, sendo dividido em regiões administrativas. Sua economia é baseada principalmente no setor público, comércio e prestação de serviços. A região possui clima tropical, com uma estação seca e outra chuvosa, além de apresentar áreas de Cerrado. O Distrito Federal tem grande importância política e administrativa, pois é onde estão localizados os principais órgãos do governo federal, como o Congresso Nacional, o Palácio do Planalto e o Supremo Tribunal Federal.</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>

  )
};