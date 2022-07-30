// ES8: Object.values/Object.entreis;
const obj = {a: 1, b: 2, c: 3};
console.log(Object.values(obj));
console.log(Object.entries(obj));

//Melhorias na Notação Litral;
const nome = 'Carla';
const pessoa = {
    nome,
    ola() {
        return 'Oi gente';
    }
}
console.log(pessoa.nome, pessoa.ola());

//Class 
class Animal {};
class Cachorro extends Animal {
    falar() {
        return 'AU AU !'
    }
}

console.log(new Cachorro().falar()) 