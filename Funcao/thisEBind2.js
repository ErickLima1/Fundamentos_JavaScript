function Pessoa() {
    this.idade = 0;

    const self = this;
    setInterval(function() { //Ela dispara outra função de um determinado intervalo que vc passou;
        self.idade++;
        console.log(self.idade);
        
    }/*.bind(this)*/, 1000);
}

new Pessoa;