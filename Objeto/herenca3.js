const pai = {nome: 'Pedro', corCabelo: 'Preto'}

const filah1  = Object.create(pai);
filah1.nome = 'Ana';
console.log(filah1.corCabelo);

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome);
filha2.nome = 'Carla';
console.log(`${filha2.nome} Tem Cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filah1));
console.log(Object.keys(filha2));

for(let keys in  filha2) {
    filha2.hasOwnProperty(keys) ?
        console.log(keys) : console.log(`Por Herença: ${keys}`)
}

 
