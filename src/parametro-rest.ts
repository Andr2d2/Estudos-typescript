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