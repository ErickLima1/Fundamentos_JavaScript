//Não aceite repetição/não indexada;
const time = new Set();
time.add('Vasco');
time.add('Remo').add('Palmeiras').add('Corinthians').add('Pysandu');
time.add('Flamengo');
time.add('Vasco');

console.log(time);
console.log(time.size);
console.log(time.has('Vasco'));
console.log(time.has('Vasco'));
time.delete('Flamengo');
console.log(time.has('Flamengo'));

const  nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'];
const nomeSet = new Set(nomes);
console.log(nomeSet);