// Classe
class Personagem {
    readonly hp: number;
    private _maxHp: number;

    constructor(
        public nome: string,
        public classe: string,
        public forca: number,
        public destreza: number,
        public constituicao: number,
        public sorte: number) {
        this.nome = nome;
        this.classe = classe;
        this.forca = forca;
        this.destreza = destreza;
        this.constituicao = constituicao;
        this.sorte = sorte;
        this._maxHp = this._calculoHp();
        this.hp = this._maxHp;
    }

    private _calculoHp(): number {
        return this.constituicao + (this.forca / 2);
    }

    testeAtributo(valorDoDado: number, valorDoAtributo: number): boolean {
        return valorDoDado >= valorDoAtributo;
    }


    inflingirDano(): number {
        return this.destreza + this.forca;
    }
}

const char = new Personagem('Emmet', 'Arqueiro', 3, 5, 4, 6);
console.log(`Força de ${char.nome}: ${char.forca}`);


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