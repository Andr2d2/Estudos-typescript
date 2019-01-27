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
