// Herança
class Veiculo {
    constructor(public portas: number, public rodas: number) { }
}

class Monomotor extends Veiculo {
    constructor() {
        super(2, 5)
    }

    voar() {
        console.log('Voando...');
    }
}

class Barco extends Veiculo {
    constructor() {
        super(0, 0);
    }

    navegar() {
        console.log('Navegando...');
    }
}

const aviazinho = new Monomotor();
console.log('aviazinho');
aviazinho.voar();
console.log('Portas: ', aviazinho.portas);
console.log('Rodas: ', aviazinho.rodas);

const barco = new Barco();
console.log('barco');
barco.navegar();
console.log('Portas: ', barco.portas);
console.log('Rodas: ', barco.rodas);