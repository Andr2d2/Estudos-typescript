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
- [Arrow function](#Arrow-function)
- [Objeto literal](#Objeto-literal)
- [Operador spread](#Operador-spread)
- [Desestruturando array/objeto](#Desestruturando)
- [Tipos primitivos](#Tipos)
- [Enum](#Enum)
- [Funções tipadas](#Funções-tipadas)
- [Parâmetro opcional](#Parâmetro-opcional)
- [Converção(cast)](#Converção)
- [Parâmetro Rest](#Parâmetro-Rest)
- [Interfaces](#Interfaces)
- [Funções](#Funções)
  - [Função Pura](#Função-pura)
  - [Função impura](#Função-impura)
- [Union literal type](#Union-literal-type)
- [Tipo tupla](#Tipo-tupla)
- [Tipo alias](#Tipo-alias)
- [Classes](#Classes)
  - [Getters/Setters](#Getters-Setters)


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

# Tipos

Tipos primitivos de dados
```ts
const texto: string = 'Qual o sentido da vida?';
const numero: number = 42;
const verdadeiro: boolean = true;
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

# Funções tipadas

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

# Parâmetro opcional
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

# Parâmetro Rest

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
# Resources

* [TypeScript Docs](https://www.typescriptlang.org)
* [TypeScript Playground](https://www.typescriptlang.org/play)
* [AST Explorer](https://astexplorer.net)
