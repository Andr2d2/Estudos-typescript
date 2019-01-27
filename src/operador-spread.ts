function sumNumbers(...valuesArray: number[]){
    return valuesArray.reduce((prev, next) => prev + next);
}

const total = sumNumbers(1, 2, 3, 4, 5);

console.log('Operador spread Ex1', total);

const oldGames = ['Full throttle', 'Grim Fandangos'];
const newGames = ['Baattlefron 2', 'Ori'];
const games = [...oldGames, ...newGames];

console.log('Operador spread Ex2 ', games);
