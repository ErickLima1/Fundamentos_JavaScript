class Produto { //Uma classe pode ter varios metodos e construtores
    constructor() { //Construtor metodo para criar e inicializar um objeto criado a partir de uma class(Produto)
        this.id = 1;
        this.arrayProduto = [];
        this.editId = null;
    }

    salvar() { //metodo ele recebe funções de como adicionar, excluir e editar;
       let produto = this.lerDados();

       if(this.validaCampo(produto)) {
            if(this.editId === null) {
                this.adicionar(produto);
            } else {
                this.atualizar(this.editId, produto);
            }

       }
       this.listaTabela();
       this.cancelar();
    }
    
    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayProduto.length; i++) {
            let tr = tbody.insertRow(); //Tr Linhas(insertRow) inseri uma nova linhas

            let tdId = tr.insertCell(); //td Colunas(insertCell) insira uma coluna
            let tdNomeObra = tr.insertCell();
            let tdCapitulos = tr.insertCell();
            let tdAcao = tr.insertCell();

            tdId.innerText = this.arrayProduto[i].id;
            tdNomeObra.innerText = this.arrayProduto[i].nomeObra;
            tdCapitulos.innerText = this.arrayProduto[i].capitulos;

            let imgEdit = document.createElement('img')
            imgEdit.src = 'img/pencil-square.svg';
            imgEdit.setAttribute("onclick", "produto.preparaEditacao("+ JSON.stringify(this.arrayProduto[i]) + ")");

            let imgExcluir = document.createElement('img')
            imgExcluir.src = 'img/trash.svg';
            imgExcluir.setAttribute("onclick", "produto.deletar("+ this.arrayProduto[i].id + ")");

            tdAcao.appendChild(imgEdit);
            tdAcao.appendChild(imgExcluir);

            tdId.classList.add('center');
            tdAcao.classList.add('center');
            
        }
    }
    adicionar(produto) {
        this.arrayProduto.push(produto);
        this.id++;
    }
    
    atualizar(id, produto) {
        for(let i = 0; i < this.arrayProduto.length; i++) {
            if(this.arrayProduto[i].id === id) {
                this.arrayProduto[i].nomeObra = produto.nomeObra;
                this.arrayProduto[i].capitulos = produto.capitulos;
            }
        }
    }
    preparaEditacao(dados) {
        this.editId = dados.id
        document.getElementById('NomeObra').value = dados.nomeObra;
        document.getElementById('capitulos').value = dados.capitulos;

        document.getElementById('btn1').innerText = 'Atualizar';
    }
    
    lerDados() {
        let produto = {}

        produto.id = this.id;
        produto.nomeObra = document.getElementById('NomeObra').value;
        produto.capitulos = document.getElementById('capitulos').value; //value e porque eu quero receber o valor

        return produto;
    }

    validaCampo(produto) {
        let msg = '';
        if(produto.nomeObra === '' || produto.capitulos === '') {
            msg += 'Campos em Branco \n';
        }
        if(msg != '') {
            alert(msg);
            return false
        }

        return true;
    }

    cancelar() {
        document.getElementById('NomeObra').value  = '';
        document.getElementById('capitulos').value = '';

        document.getElementById('btn1').innerText = 'Savar';
        this.editId = null;
    }

    deletar(id) {
        if(confirm('Deseja realmente deletar o produto')) {
            let tbody = document.getElementById('tbody');

            for(let i =0; i < this.arrayProduto.length; i++) {
                if(this.arrayProduto[i].id === id) {
                    this.arrayProduto.splice(i, 1);
                    tbody.deleteRow(i);
                }   
            }
        }
    }
    
}

var produto = new Produto();