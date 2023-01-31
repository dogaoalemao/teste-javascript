function novoAumento ( novoSalario ) {
    return (novoSalario * 100) /100; //return ( salario * 8.9 ) / 100;
}

let salario = 650;
let aumento = 0.33

let result = novoAumento ( salario * aumento );

console.log( ` Dará um aumento ${aumento}% o seu salário: R$ ${ result + salario } `);