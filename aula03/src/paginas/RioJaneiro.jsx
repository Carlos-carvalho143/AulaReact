import {Link} from "react-router-dom";
export default function RioJaneiro()
{
  return(
    <div>
      <h1>Aula 03 - Estado do Rio de Janeiro</h1>
      <div className="conteudo">
      <img src="/RJ.png"/>
      <p>O estado do Rio de Janeiro, localizado na Região Sudeste do Brasil, tem como capital a cidade do Rio de Janeiro, mundialmente conhecida por suas paisagens naturais e por ser um importante centro turístico e cultural. Sua economia é impulsionada pelos setores de petróleo e gás, turismo, comércio, serviços e indústria. O estado abriga atrações famosas, como o Cristo Redentor, o Pão de Açúcar e as praias de Copacabana e Ipanema, além de sediar grandes eventos culturais, como o Carnaval. Com uma rica história e grande importância econômica e cultural, o Rio de Janeiro desempenha um papel de destaque no desenvolvimento do Brasil.</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>
  )
};