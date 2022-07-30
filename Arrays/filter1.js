const produto = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4499, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.49, fragil: false},

]

console.log(produto.filter(function(p) {
    return false
}))

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produto.filter(caro).filter(fragil))