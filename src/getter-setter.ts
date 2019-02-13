// Getter/Setter
class Carro {
    private _cor: string = 'branco';

    constructor() { }

    set cor(novaCor: string) {
        this._cor = novaCor;
    }

    get cor() {
        return this._cor;
    }
}

const batmovel = new Carro();

console.log(`Cor atual é ${batmovel.cor}`);
batmovel.cor = 'preto';
console.log(`Nova cor  é ${batmovel.cor}`);