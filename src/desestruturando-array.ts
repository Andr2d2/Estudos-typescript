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
