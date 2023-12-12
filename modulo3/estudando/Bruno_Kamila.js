class Mensagem {
    // Atributos privados (convenção usando _)
    #nome1;
    #nome2;

    // Construtor
    constructor(nome1, nome2) {
        this.#nome1 = nome1;
        this.#nome2 = nome2;
    }

    // Método público para obter a mensagem
    obterMensagem() {
        return (`${this.#nome1} <3 ${this.#nome2}`);
    }
}

// Exemplo de uso
const mensagem2 = new Mensagem("Bruno", "Kamila");
console.log(mensagem2.obterMensagem());