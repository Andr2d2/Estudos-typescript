class Util {
    static diaAtual(): string {
        return new Date().getDate().toString();
    }
}

console.log(`Hoje é dia: ${Util.diaAtual()}`);