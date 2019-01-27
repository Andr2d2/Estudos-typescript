const coisa: any = 'coisa';
const tamanhoDaCoisa: number = (<string>coisa).length;
const tamanhoDaCoisa2: number = (coisa as string).length;
const tamanhoDaCoisa3: string = ((coisa as string).length).toString();

console.log('tamanhoDaCoisa', tamanhoDaCoisa);
console.log('tamanhoDaCoisa2', tamanhoDaCoisa2);
console.log('tamanhoDaCoisa3', tamanhoDaCoisa3);
