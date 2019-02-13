// Abstract
abstract class SerHumano {
    constructor() { }

    // declaração
    abstract pensar(): void;
    abstract acreditar(): void;
}


class Eu extends SerHumano {
    constructor() {
        super();
    }

    // implementação de métodos
    pensar(): void {
        console.log('Pensando...');
    }

    acreditar(): void {
        console.log('Acreditar...');
    }
}

new Eu().pensar();
new Eu().acreditar();