function tratarErroLancar(erro) {
    //throw new Error('Ocorreu um erro...');
    //throw 10;
    //throw true;
    //throw 'Mensagem';
    
    throw {
        nome:erro.name,
        msg: erro.mensage,
        date: new Date
    }
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.nome.ToUpperCase() + '!!!');

    }catch(e) {
        tratarErroLancar(e)
    }finally {
        console.log('Final do Arquivo');
    }
}

const obj = {nome: 'Roberto'};
imprimirNomeGritando(obj);