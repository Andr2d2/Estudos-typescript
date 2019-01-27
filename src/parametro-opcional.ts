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
