<h1 align="center">
<img width="40" valign="bottom" src="https://ultimateangular.com/assets/img/categories/typescript.svg">
TypeScript: Estudos
</h1>

> Projeto de estudo usando como base o curso [Ultimate Angular's TypeScript](https://ultimateangular.com/courses/), criado por [Todd Motto](https://toddmotto.com/).
Todo o código esta no arquivo `app.ts`, para ve-lo funcionando siga os processos de instalação abaixo.

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
```js
pizzas.map((pizza) => {
    return pizza.name.toUpperCase();
});
```

Declaração com retorno implícito
```js
pizzas.map(pizza => pizza.name.toUpperCase());
```

Parâmetro default
```js
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
```js
const game = {
    name: 'Ori and the blind forest',
    price: '13,50'
}

const genres = ['indie', 'metroidvania'];
const order = { game, genres }

```

> Saída:
```js
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
```js
const oldGames = ['Full throttle', 'Grim Fandangos'];
const newGames = ['Baattlefron 2', 'Ori'];
const games = [...oldGames, ...newGames];

console.log(games);
```

> Saída:
```js
["Full throttle", "Grim Fandangos", "Baattlefron 2", "Ori"]
```

# Desestruturando

Alterando nome de propriedade de objeto
```js
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
```js
{
    nome: "John Connor", 
    nascimento: "28/02/1985"
}
```

Quebrando array em variáveis
```js
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
```js
const texto: string = 'Qual o sentido da vida?';
const numero: number = 42;
const verdadeiro: boolean = true;
```

# Enum

Enumaração
```js
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
```js
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
```js
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

```js
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
```js
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
# Resources

* [TypeScript Docs](https://www.typescriptlang.org)
* [TypeScript Playground](https://www.typescriptlang.org/play)
* [AST Explorer](https://astexplorer.net)