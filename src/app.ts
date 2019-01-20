//#region ARROW FUNCTIONS 
const pizzas = [
    { name: 'calabresa', toppings: 'calabresa' },
    { name: '4 queijos', toppings: 'calabresa' }
];

// Arrow function
const mappedPizzas = pizzas.map((pizza) => {
    return pizza.name.toUpperCase();
});

// Arrow function com retorno implícito
const mappedPizzasImplicitReturn = pizzas.map(pizza => pizza.name.toUpperCase());

console.log('Arrow function ', mappedPizzas);
console.log('Arrow function retorno implícito ', mappedPizzasImplicitReturn);


// Parâmetro default
function multiply(a: number, b = 5) {
    return a * b;
}

console.log('Com parâmetro opcional', multiply(2, 5));
console.log('Sem parâmetro opcional', multiply(2));
//#endregion


//#region OBJECT LITERAL
const game = {
    name: 'Ori and the blind forest',
    price: '13,50'
}

const genres = ['indie', 'metroidvania'];

const order = {
    game: game,
    genres: genres
}

const orderShort = { game, genres }

console.log('Merge normal de objetos ', order);
console.log('Merge melhorado de objetos ', orderShort);
//#endregion

//#region OPERADOR SPREAD
function sumNumbers(...valuesArray: number[]){
    return valuesArray.reduce((prev, next) => prev + next);
}

const total = sumNumbers(1, 2, 3, 4, 5);

console.log('Operador spread Ex1', total);

const oldGames = ['Full throttle', 'Grim Fandangos'];
const newGames = ['Baattlefron 2', 'Ori'];
const games = [...oldGames, ...newGames];

console.log('Operador spread Ex2 ', games);
//#endregion


//#region DESESTRUTURANDO ARRAY
const cartman = {
    user: 'Cartman',
    words: ['asshole', 'bitch']
};

function filterLanguage({ user, words: badWords }: { user:string, words: string[] }){
    return { user, badWords };
}

console.log('Desestruturando nome de propriedade Ex1', filterLanguage(cartman));


const englishData = {
    userName: 'John Connor',
    birth: '28/02/1985'
}

function translatoToPtBr({ userName: nome, birth: nascimento }: { userName: string, birth: string }){
    return { nome, nascimento };
}

console.log('Desestruturando nome de propriedade Ex2', translatoToPtBr(englishData));


const fruits = ['maça', 'pera', 'melancia'];
const [primeiro, segundo, terceiro] = fruits;

console.log('Desestruturando nome de propriedade Ex2 ', primeiro, segundo, terceiro);
console.log('- primeiro ', primeiro);
console.log('- segundo ', segundo);
console.log('- terceiro ', terceiro);
//#endregion