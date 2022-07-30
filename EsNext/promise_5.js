function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      con.log('Tempo');
      if (Math.random() < chanceErro) {
        reject("Ocorreu um ERRO !!");
      } else {
        resolve(valor);
      }
    } catch (e) {
        resolve(e);
    }
  });
}

funcionarOuNao("Teste...", 0.9)
  .then((v) => `Valor: ${v}`)
  .then(
    (v) => consol.log(v),
    //(err) => console.log(`Erro Especifico. ${err}`)
  )
  .then(() => console.log("Quase Fim !"))
  .catch((err) => console.log(`Erro Geral: ${err}`))
  .then(() => console.log("Fim"));
