import {Link} from "react-router-dom";
import {useState} from "react";
export default function Exercicio2()
{
    const[fah, setFah] = useState();
    const[resultado, setResultado] = useState();
function calcular ()
{
    let cel;
    cel = (Number(fah) - 32) * 5 / 9;
setResultado(
    <div>
        {fah} = {cel}
        <br />
         
    </div>
)
}
    return (
        <div>

            <h1>Exercício 2</h1>

            <div className="conteudo">
<form>
<p>
    digite a temperatura em fahrenheit; </p> 
    <p>
    <input type="text"
    value = {fah}
  onChange={ (e) => setFah (e.target.value)}
/></p>
<p>
    <input type="button" value="calcular" onClick={calcular} />
</p>
<p>
    {resultado}
</p>
</form>
                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}