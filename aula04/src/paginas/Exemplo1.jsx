import {Link} from "react-router-dom";
import {useState} from "react";
export default function Exemplo1()
{
    const[Nome, setNome] = useState("");
    const[Idade, setIdade] = useState();
  const[resultado, setResultado] = useState();
  const[dias, setDias] = useState();
  function calcular()
  {
    let res = Idade * 365;
    
    setDias( res );
  }
  function processar()
  {
    let res = Idade * 365;
setDias( res );
setResultado(
<div>
    o aluno {Nome} ja viveu {res}dias
</div>)
  }
  
    return (
        <div>

            <h1>Exemplo 1</h1>

            <div className="conteudo">
 <form>
    <p>
    digite o nome do aluno <br />
    <input type="text" value={Nome} onChange={(e) => setNome(e.target.value)}/>
 </p>
 </form>
 <form>
    <p>
    digite sua idade <br />
    <input type="text" value={Idade} onChange={(e) => setIdade(e.target.value)}/>
 </p>
 <p>
    <input type="button" value="calcular" onClick="calcular" />

     <input type="button" value="processar" onClick={processar} />
 </p>
 </form>
 <p>
    Nome do aluno: {Nome} <br />
    Idade: {Idade}
    <br />
    dias vividos: {dias}
</p>
<p>
    {resultado}
</p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}