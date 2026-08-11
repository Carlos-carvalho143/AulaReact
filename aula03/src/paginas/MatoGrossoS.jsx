import {Link} from "react-router-dom";
export default function MatoGrossoS()
{
  return(
    <div>
      <h1>Aula 03 - Estado do Mato Grosso do Sul</h1>
      <div className="conteudo">
      <img src="/MS.png"/>
      <p>Mato Grosso do Sul é um estado localizado na região Centro-Oeste do Brasil, tendo Campo Grande como sua capital. O estado possui uma economia baseada principalmente na agricultura, pecuária e indústria, destacando-se na produção de soja, milho, cana-de-açúcar e na criação de gado. Sua natureza é marcada pela presença do Pantanal e do Cerrado, com grande diversidade de animais e plantas. Mato Grosso do Sul também possui rios, cachoeiras e belas paisagens, atraindo turistas para atividades como pesca e ecoturismo. O estado faz fronteira com Paraguai e Bolívia e possui grande importância econômica e ambiental para o Brasil.
</p>
    <p><Link to="/">voltar</Link></p>
    </div>
    </div>

  )
};