function falarDeposDe(segundos, frase) {
    return new Promise((resolver, reject) => {
        setTimeout(() => {
            resolver(frase)
        }, segundos * 1000);
    });
};

falarDeposDe(3, 'Que legal')
    .then(frase => frase.concat('?!?'))
    .then(outrafrase => console.log(outrafrase))
    .catch(e => console.log(e));