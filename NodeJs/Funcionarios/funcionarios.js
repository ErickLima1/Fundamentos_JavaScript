const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios'); //Faz requisições para obter informaçãoes de algo que esta remoto;

const Brazil = f => f.pais === 'Brazil';
const Homen = f => f.genero === 'M';
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
}

axios.get(url).then(response => {
    const funcionarios = response.data;
    console.log(funcionarios);

    //Mulher chinesa com menor Salario?
    const func = funcionarios
        .filter(Brazil)
        .filter(Homen)
        .reduce(menorSalario)

        console.log(func);
})