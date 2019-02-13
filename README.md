<h1 align="center">
<img width="40" valign="bottom" src="https://ultimateangular.com/assets/img/categories/typescript.svg">
TypeScript: Estudos
</h1>

> Projeto de estudo usando como base os cursos:
> - [Ultimate Angular's TypeScript](https://ultimateangular.com/courses/), criado por [Todd Motto](https://toddmotto.com/);
> - vídeo aulas do [DevDojo](https://www.youtube.com/playlist?list=PL62G310vn6nGg5OzjxE8FbYDzCs_UqrUs), criado por William Suane.
> Todo o código esta no arquivo `app.ts`, para ve-lo funcionando siga os processos de instalação abaixo.

# Índice
- [Instalação e setup](#Instalação-e-setup)
- [Tipos primitivos](#Tipos-primitivos)
- [Objeto literal](#Objeto-literal)
- [Converção(cast)](#Converção)
- [Arrow function](#Arrow-function)
- [Operador spread](#Operador-spread)
- [Desestruturando array/objeto](#Desestruturando)
- [Enum](#Enum)
- [Interfaces](#Interfaces)
- [Funções](#Funções)
  - [Funções tipadas](#Funções-tipadas)
  - [Parâmetro opcional](#Parâmetro-opcional)
  - [Parâmetro Rest](#Parâmetro-Rest)
  - [Union literal type](#Union-literal-type)
  - [Função Pura](#Função-pura)
  - [Função impura](#Função-impura)
- [Tipo tupla](#Tipo-tupla)
- [Tipo alias](#Tipo-alias)
- [Classes](#Classes)
  - [Getters/Setters](#Getters-Setters)
  - [Herança](#Herança)
  - [Classe abstrata](#Classe-abstrata)
  - [Implements](#Implements)


# Instalação e setup

1. Download e instalação do [Node.js](https://nodejs.org/en/download/).

2. Instalação das dependências:
    ```
    yarn
    # OU
    npm i
    ```

3. Para inicializar o projeto
    ```
    yarn start
    # OU
    npm start
    ```

4. Endereço local `localhost:3000`

>*Opcional* Instalação global do TypeScript via `npm i -g typescript`:

# Tipos primitivos

Tipos primitivos de dados
```ts
const texto: string = 'Qual o sentido da vida?';
const numero: number = 42;
const verdadeiro: boolean = true;
```

# Objeto literal

Mergeando objetos em um novo.
```ts
const game = {
    name: 'Ori and the blind forest',
    price: '13,50'
}

const genres = ['indie', 'metroidvania'];
const order = { game, genres }

```

> Saída:
```ts
{
    game:  {
        name: 'Ori and the blind forest',
        price: '13,50'
    },
    genres: ['indie', 'metroidvania']
}
```

# Converção

```ts
const coisa: any = 'coisa';
const tamanhoDaCoisa: number = (<string>coisa).length;
const tamanhoDaCoisa2: number = (coisa as string).length;
const tamanhoDaCoisa3: string = ((coisa as string).length).toString();

console.log('tamanhoDaCoisa', tamanhoDaCoisa);
console.log('tamanhoDaCoisa2', tamanhoDaCoisa2);
console.log('tamanhoDaCoisa3', tamanhoDaCoisa3);
```

> Saída:
```
tamanhoDaCoisa 5
tamanhoDaCoisa2 5
tamanhoDaCoisa3 5
```

# Arrow function

Declaração comum
```ts
pizzas.map((pizza) => {
    return pizza.name.toUpperCase();
});
```

Declaração com retorno implícito
```ts
pizzas.map(pizza => pizza.name.toUpperCase());
```

Parâmetro default
```ts
function multiply(a: number, b = 5) {
    return a * b;
}

multiply(2)
multiply(2, 6)
```

> Saída:
```
10
12
```



# Operador spread

Concatenando arrays
```ts
const oldGames = ['Full throttle', 'Grim Fandangos'];
const newGames = ['Baattlefron 2', 'Ori'];
const games = [...oldGames, ...newGames];

console.log(games);
```

> Saída:
```ts
["Full throttle", "Grim Fandangos", "Baattlefron 2", "Ori"]
```

# Desestruturando

Alterando nome de propriedade de objeto
```ts
const englishData = {
    userName: 'John Connor',
    birth: '28/02/1985'
}

function translatoToPtBr({ userName: nome, birth: nascimento }: { userName: string, birth: string }){
    return { nome, nascimento };
}

console.log(translatoToPtBr(englishData));
```

> Saída:
```ts
{
    nome: "John Connor", 
    nascimento: "28/02/1985"
}
```

Quebrando array em variáveis
```ts
const fruits = ['maça', 'pera', 'melancia'];
const [primeiro, segundo, terceiro] = fruits;

console.log('- primeiro ', primeiro);
console.log('- segundo ', segundo);
console.log('- terceiro ', terceiro);
```

> Saída:
```
- primeiro maça
- segundo segundo
- terceiro terceiro
```


# Enum

Enumaração
```ts
enum Semana {
    DOMINGO,    // 0
    SEGUNDA,    // 1
    TERCA,      // ... auto incrementa a partir do primeiro zero
    QUARTA,
    QUINTA,
    SEXTA,
    SABADO
};

enum FeedbackStatus {
    INATIVO = 'Ops, este usuário esta inativo', 
    ATIVO = 'Usuário ativo'
};

const numeroPrimeiroDiaUtil: Semana = Semana.SEGUNDA;
const nomePrimeiroDiaUtil: string = Semana[numeroPrimeiroDiaUtil];
const mensagem: FeedbackStatus = FeedbackStatus.ATIVO;

console.log(`Número do primeiro dia útil da semana: ${numeroPrimeiroDiaUtil}`);
console.log(`Primeiro dia útil da semana: ${nomePrimeiroDiaUtil}`);
console.log(mensagem);
```

> Saída:
```
Número do primeiro dia útil da semana: 1
Primeiro dia útil da semana: SEGUNDA
Usuário ativo
```

# Interfaces

```ts
interface Usuario {
    nome: string,
    email: string,
    readonly id: number,    // propriedade apenas leitura
    idade?: number          // opcional
};

interface SuperUsuario extends Usuario{
    poder: string
}

// instâncias
const usuario: Usuario = {
    nome: 'Fernanda',
    email: 'unicornioscoloridos@email.com',
    id: 1,
    idade: 11
}; 

const admin: SuperUsuario = {
    nome: 'Chefinho',
    email: 'ochefe@email.com',
    id: 0,
    poder: 'acesso a tudo'
};

// sem interface como tipo definido
const alguem: { nome: string, email: string, id: number} = {
    email: 'desconhecido@email.com',
    id: 123,
    nome: 'Ninguém'
};

function boasVindasSemInterface(usuario: { nome: string, email: string, id: number}): void {
    console.log(`Bem vindo ${usuario.nome}!`);
}

function boasVindas(usuario: Usuario): void {
    console.log(`Bem vindo ${usuario.nome}!`);
}

function puxarSaco(usuario: SuperUsuario): void {
    console.log(`${usuario.nome}, você é o melhor!`);
}

boasVindasSemInterface(usuario);
boasVindas(usuario);
boasVindas(admin);
boasVindas(<Usuario>alguem);
puxarSaco(admin);
```

> Saída:
```
Bem vindo Fernanda!
Bem vindo Fernanda!
Bem vindo Chefinho!
Bem vindo Ninguém!
Chefinho, você é o melhor!
```

# Funções

## Funções tipadas

Funções com retorno tipado
```ts
function sum(valor1: number, valor2: number): number{
    return valor1 + valor2;
}

function concat(texto1: string, texto2: string, texto3: string): string{
    return `${texto1} ${texto2} ${texto3}`;
}

function printError(error: string): void {
    console.warn(`Error: "${error}"`);
}

const valorTotal: number = sum(2,3);
const frase: string = concat('Come', 'out and', 'play');

console.log(`Valor total: ${valorTotal}`);
console.log(frase);
printError('Login inválido');
```

> Saída:
```
Valor total: 5
Come out and play
"Login inválido"
```

## Parâmetro opcional
```ts
function gerarFicha(forca: number, destreza: number, sorte?: number): void {
    let ficha = {
        'Força': forca,
        'Destreza': destreza,
        'Sorte': sorte || 0
    };

    console.table(ficha);
};

gerarFicha(5, 2, 8);
gerarFicha(2, 9);
```

## Parâmetro Rest
Reticências indigar que o parâmetro pode receber *x* valores em sequência.
```ts
function testeDeAtributo(atributo: number, ...valorDados: number[]): boolean{
    let total: number = 0;

    for (let i = 0, l= valorDados.length; i < l; i++) {
        total += valorDados[i];
    }
    
    console.log('- Total dos dados: ', total);

    if (total >= atributo) {
        return true;
    } else {
        return false;
    }
}

console.log(`Teste de força: ${testeDeAtributo(6, 2, 2, 1)}`);
console.log(`Teste de destreza: ${testeDeAtributo(3, 6, 2, 4, 5, 4)}`);
```

> Saída:
```
- Total dos dados:  5
Teste de força: false
- Total dos dados:  21
Teste de destreza: true
```

## Union literal type
```ts
let algumaCoisa: number | string | Object;

function selecionarClasse(classe: 'arqueiro' | 'mago' | 'ladino'): void {
    console.log('Classe selecionada: ', classe);
}
selecionarClasse('arqueiro');
```

> Saída:
```
Classe selecionada: arqueiro
```

## Função pura
Função que o retorno será sempre o mesmo para um dado parâmetro e não causam **side effects**, ou seja, não alteram o estado da aplicação.

```ts
const dataPadraoEua: string = '07/23/1984';

function modificaPadrao(data: string) {
    let array = data.split('/');

    return `${array[1]}/${array[0]}/${array[2]}`
}

console.log('Função pura: ', modificaPadrao(dataPadraoEua));
```

> Saída:
```
Função pura: 23/07/1984
```

## Função impura
Função que altera o estado da aplicação, desta forma, depende de um fator externo.

```ts
const umObjetoQualquer: any = {};

function setaUmNumero(valor:number) {
    umObjetoQualquer.numero = valor;    
}

setaUmNumero(42);

console.log('Função impura: ', umObjetoQualquer);
```

> Saída:
```
Função impura: {numero:42} 
```

#Union literal type
```ts
let algumaCoisa: number | string | Object;

function selecionarClasse(classe: 'arqueiro' | 'mago' | 'ladino'): void {
    console.log('Classe selecionada: ', classe);
}

selecionarClasse('arqueiro');
```

> Saída:
```
Classe selecionada: arqueiro
```

# Tipo tupla
É possível devinir a estrutura de tipos de um array como se fosse uma tupla de um banco de dados (linha e coluna).

```ts
let robot: [number, string, boolean];

robot = [101, 'CL4PTR3P', true];
```

# Tipo alias
```ts
type Tamanho = 'P' | 'M' | 'G';

let camisa = {
    cor: 'roxo',
    tamanho: ''
};

function selecionarTamanho(tamanho: Tamanho): void {
    camisa.tamanho = tamanho;
}

selecionarTamanho('P');
```

# Classes
```ts
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
```

> Saída
```
Força de Emmet: 3
```

## Getters Setters
```ts
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
```

> Saída
```
Cor atual é branco
Nova cor é preto
```

## Herança
```ts
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
```

> Saída
```
aviazinho
Portas: 2
Rodas: 5

barco
Portas: 0
Rodas: 0
```


## Classe-abstrata
```ts
abstract class SerHumano {
    constructor() { }

    // declaração de métodos
    abstract pensar(): void;
    abstract acreditar(): void;
}


class Eu extends SerHumano {
    constructor() {
        super();
    }

    // implementação
    pensar(): void {
        console.log('Pensando...');
    }

    acreditar(): void {
        console.log('Acreditar...');
    }
}


new Eu().pensar();
new Eu().acreditar();
```

> Saída
```
Pensando...
Acreditar...
```

## Implements
Implementação da interface para definir propriedade ou método
```ts
interface IContratoApi {
    endPoint: string;
    token: string;
    post(idProduto: number): void;
}

class Api implements IContratoApi {

    constructor(public endPoint: string, public token: string) {
        this.endPoint = endPoint;
        this.token = token;
    }

    post(idProduto: number): void{
        console.log(`Post para ${this.endPoint} com ${this.token} usando ${idProduto}`);
    }
}


new Api('www.minhaapi.com/api/produto', '7856422135431').post(123);
```

> Saída
```
Post para www.minhaapi.com/api/produto com 7856422135431 usando 123
```
# Resources

* [TypeScript Docs](https://www.typescriptlang.org)
* [TypeScript Playground](https://www.typescriptlang.org/play)
* [AST Explorer](https://astexplorer.net)
