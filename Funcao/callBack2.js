const nota = [7.7, 6.5, 5.2, 3.6, 7.1, 9.0];

//Sem callbacks
const notaBaixas1 = [];
for(let i in nota) {
    if(nota[i] < 7) {
        notaBaixas1.push(nota[i]);
    }
}

console.log(notaBaixas1);

//Com CallBack;
const notaBaixas2 = nota.filter(function(nota) {
    return nota < 7;
})

console.log(notaBaixas2);

const notaMenorQue7 = nota => nota < 7;
const notaBaixas3 = nota.filter(notaMenorQue7);
console.log(notaBaixas3);