function gerarNumerosEntre(min, max, numerosProibidos) {
  if (min > max) [max, min] = [min, max];
  return new Promise((resolve, reject) => {
    const fator = max - min;
    const aleatorio = parseInt(Math.random() * fator) + min;
    if (numerosProibidos.includes(aleatorio)) {
      reject("Números Repetidos");
    } else {
      resolve(aleatorio);
    }
    resolve(aleatorio);
  });
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
  try {
    const numeros = [];
    for (let _ of Array(qtdNumeros).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros));
    }
    return numeros;
  } catch (e) {
    if(tentativas > 10) {
        throw "Não deu Certo !";
    }
    gerarMegaSena(qtdNumeros, tentativas + 1);
}
}

gerarMegaSena(15).then(console.log).then(console.log);
