function gerarNumerosEntrem(min, max) {
    if(min > max) {
        [max, min] = [min, max];
    
    };
    return new Promise(resolve => {
        const fator = max - min + 1; 
        const aleatorio = parseInt(Math.random() * fator) + min;
        resolve(aleatorio);
    })
};

gerarNumerosEntrem(10, 30)
    .then(num => num * 10)
    .then(numx10 => `O Numero Gerado Foi ${numx10}`)
    .then(console.log)