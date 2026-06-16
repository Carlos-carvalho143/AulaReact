export default function Exercicio10({salbase}){
let salariobase = Number(salbase);

const grat = salbase * 0.08;
const saltotal = salbase + grat;

return(
<div>
    <br />
salario base:  R$ {salbase.toFixed(2)} <br />
gratificação:  R$ {grat.toFixed(2)} <br />
salario final:  R$ {saltotal.toFixed(2)} <br />
</div>
);

}