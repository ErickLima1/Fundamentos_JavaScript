const porta = 3003;

const express = require('express');
const app = express();
const  bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos());
});

app.get('/produtos/:id', (req, res) => { //Criar
    res.send(bancoDeDados.getProduto(req.params.id));
})

app.post('/produtos', (req, res, next) => { 
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.Nome,
        preco: req.body.preco
    })
    res.send(produto) // Vai converter um JSON;
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.Nome,
        preco: req.body.preco
    })
    res.send(produto) // Vai converter um JSON;
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id);
    res.send(produto) // Vai converter um JSON;
})

app.listen(porta, () => {
    console.log(`Servidor Esta Executando Na Porta ${porta}!.`);
})

