//#region pure function
const dataPadraoEua: string = '07/23/1984';

function modificaPadrao(data: string) {
    let array = data.split('/');

    return `${array[1]}/${array[0]}/${array[2]}`
}

console.log('Função pura: ', modificaPadrao(dataPadraoEua));
//#endregion

//#region impure function
const umObjetoQualquer: any = {};

function setaUmNumero(valor:number) {
    umObjetoQualquer.numero = valor;    
}

setaUmNumero(42);

console.log('Função impura: ', umObjetoQualquer);
//#endregion