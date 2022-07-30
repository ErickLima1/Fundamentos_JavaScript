//Operador ... res(juntar)//spread(espalhar);
//Usar rest com parametro de função;

//Usar spread com objeto;

const funcitonarios = {nome: 'Maria', salario: 12349.99};
const clone = {ativo: true, ...funcitonarios};

console.log(clone);

const grupoA = ['João', 'Maria', 'Gloria'];
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'];

console.log(grupoFinal);