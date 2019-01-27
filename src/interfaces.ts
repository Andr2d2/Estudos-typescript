interface Usuario {
    nome: string,
    email: string,
    readonly id: number,    // propriedade apenas leitura
    idade?: number          // opcional
};

interface SuperUsuario extends Usuario{
    poder: string
}

const usuario: Usuario = {
    nome: 'Fernanda',
    email: 'unicornioscoloridos@email.com',
    id: 1,
    idade: 11
}; 

const admin: SuperUsuario = {
    nome: 'Chefinho',
    email: 'ochefe@email.com',
    id: 0,
    poder: 'acesso a tudo'
};

const alguem: { nome: string, email: string, id: number} = {
    email: 'desconhecido@email.com',
    id: 123,
    nome: 'Ninguém'
};

function boasVindasSemInterface(usuario: { nome: string, email: string, id: number}): void {
    console.log(`Bem vindo ${usuario.nome}!`);
}

function boasVindas(usuario: Usuario): void {
    console.log(`Bem vindo ${usuario.nome}!`);
}

function puxarSaco(usuario: SuperUsuario): void {
    console.log(`${usuario.nome}, você é o melhor!`);
}

boasVindasSemInterface(usuario);
boasVindas(usuario);
boasVindas(admin);
boasVindas(<Usuario>alguem);
puxarSaco(admin);
