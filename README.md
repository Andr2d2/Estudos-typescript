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
```js
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

```js
- primeiro maça
- segundo segundo
- terceiro terceiro
```

# Resources

* [TypeScript Docs](https://www.typescriptlang.org)
* [TypeScript Playground](https://www.typescriptlang.org/play)
* [AST Explorer](https://astexplorer.net)