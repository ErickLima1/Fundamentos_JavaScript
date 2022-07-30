const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== '') {
        
        const valorImc = (peso / (altura * altura)).toFixed(2);

        let classificacao = "";
        
        if(valorImc < 18.5) {
            classificacao = 'Abaixo Do Peso';
        }else if(valorImc < 25) {

            classificacao = 'Com Peso Ideal. Parabens !!!';
        }else if(valorImc < 30) {
            
            classificacao =  'Levemente Acima Do Peso.';
        }else if(valorImc < 35) {

            classificacao = 'Com Obesidade  Grau I.';
        }else if(valorImc < 40) {
            classificacao = 'Obesidade Grau II.';
        }else{
            classificacao = 'Obesidade Grau III. Cuidado!!';
        }

        resultado.textContent = `${nome} Seu Imc é ${valorImc} e Você esta  ${classificacao}`;


    }else{
        resultado.textContent = 'Preencha Todos Os Campos!!!';
    }
}

calcular.addEventListener('click', imc);