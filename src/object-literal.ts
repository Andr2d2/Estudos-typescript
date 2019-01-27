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
