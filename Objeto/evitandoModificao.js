// Object.preventExtensions;
const produto = Object.preventExtensions(( {
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
}))

console.log('Extensivel: ', Object.isExtensible(produto));

produto.nome = 'Borrocha';
produto.descricao = 'Borracha Escolar Branca';
delete produto.tag;
console.log(produto)

//Object.sael
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa);
console.log('Selado: ', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29
console.log(pessoa);

