//Par nome /valor
const saudacao = 'Opa'; //contexto lexico 1;

function exec() {
    const saudacao = 'Falaa'; //contexto lexico 2;
    return saudacao;

}

//Objetos são grupos alinhados de grupo pares nome/valor;

const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);