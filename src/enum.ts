enum Semana {DOMINGO, SEGUNDA, TERCA, QUARTA, QUINTA, SEXTA, SABADO};
enum FeedbackStatus {INATIVO = 'Ops, este usuário esta inativo', ATIVO = 'Usuário ativo'};

const numeroPrimeiroDiaUtil: Semana = Semana.SEGUNDA;
const nomePrimeiroDiaUtil: string = Semana[numeroPrimeiroDiaUtil];
const mensagem: FeedbackStatus = FeedbackStatus.ATIVO;

console.log(`Número do primeiro dia útil da semana: ${numeroPrimeiroDiaUtil}`);
console.log(`Primeiro dia útil da semana: ${nomePrimeiroDiaUtil}`);
console.log(mensagem);
