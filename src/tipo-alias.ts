type Tamanho = 'P' | 'M' | 'G';

let camisa = {
    cor: 'roxo',
    tamanho: ''
};

function selecionarTamanho(tamanho: Tamanho): void {
    camisa.tamanho = tamanho;
}

selecionarTamanho('P');