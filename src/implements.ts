interface IContratoApi {
    endPoint: string;
    token: string;
    post(idProduto: number): void;
}

class Api implements IContratoApi {

    constructor(public endPoint: string, public token: string) {
        this.endPoint = endPoint;
        this.token = token;
    }

    post(idProduto: number): void{
        console.log(`Post para ${this.endPoint} com ${this.token} usando ${idProduto}`);
    }
}


new Api('www.minhaapi.com/api/produto', '7856422135431').post(123);
