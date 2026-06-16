export default function Exercicio9 ({sal, ven}) {
    let salario = Number(sal);
    let vendas = Number(ven);
const com = ven * 0.06;
const salf = sal + com;
return(
<div>
<br />
comissão: {com} <br />
salario final: {salf}
</div>

);
}