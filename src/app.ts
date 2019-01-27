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


//#region TIPOS
const texto: string = 'Qual o sentido da vida?';
const numero: number = 42;
const verdadeiro: boolean = true;
//#endregion


//#region ENUM
enum Semana {DOMINGO, SEGUNDA, TERCA, QUARTA, QUINTA, SEXTA, SABADO};
enum FeedbackStatus {INATIVO = 'Ops, este usuário esta inativo', ATIVO = 'Usuário ativo'};

const numeroPrimeiroDiaUtil: Semana = Semana.SEGUNDA;
const nomePrimeiroDiaUtil: string = Semana[numeroPrimeiroDiaUtil];
const mensagem: FeedbackStatus = FeedbackStatus.ATIVO;

console.log(`Número do primeiro dia útil da semana: ${numeroPrimeiroDiaUtil}`);
console.log(`Primeiro dia útil da semana: ${nomePrimeiroDiaUtil}`);
console.log(mensagem);
//#endregion

//#region FUNÇÔES TIPADAS
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
//#endregion


//#region PARÂMETRO OPCIONAL
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
//#endregion


//#region CONVERÇÕES
const coisa: any = 'coisa';
const tamanhoDaCoisa: number = (<string>coisa).length;
const tamanhoDaCoisa2: number = (coisa as string).length;
const tamanhoDaCoisa3: string = ((coisa as string).length).toString();

console.log('tamanhoDaCoisa', tamanhoDaCoisa);
console.log('tamanhoDaCoisa2', tamanhoDaCoisa2);
console.log('tamanhoDaCoisa3', tamanhoDaCoisa3);
//#endregion

//#region PARÂMETRO REST
function testeDeAtributo(atributo: number, ...valorDados: number[]): boolean{
    let total: number = 0;

    for (let i = 0, l= valorDados.length; i < l; i++) {
        total += valorDados[i];
    }
    
    console.log('Total dos dados: ', total);

    if (total >= atributo) {
        return true;
    } else {
        return false;
    }
}

console.log(`Teste de força: ${testeDeAtributo(6, 2, 2, 1)}`);
console.log(`Teste de destreza: ${testeDeAtributo(3, 6, 2, 4, 5, 4)}`);
//#endregion