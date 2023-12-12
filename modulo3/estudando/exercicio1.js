// 1. OK Aplicação de classe ContaDeBanco
// 2.OK  Ao criar essa classe, a gente vai ter o nome da pessoa que tem conta no banco, saldo dessa pessoa
// 3.OK Propriedade privada do saldo dela
// 4. Propriedade que fala se pode pedir empréstimo, se o saldo dessa pessoa for maior que R$ 2000
// 5. Propriedade que retorna o a seguinte string "O cliente [nome do cliente] possui XXXX de saldo no banco". Esta propriedade pode chamar Status
// OK 6. Todas as propriedades da classe criado no passo 2, devem ser priv

class ContaDeBanco{
    #nome;
    #sobrenome;
    #saldo;

    constructor(nome,sobrenome, saldo){
        this.#nome=nome;
        this.#sobrenome=sobrenome;
        this.#saldo=saldo;
    }

get obterNome(){
    return this.#nome;
}
set definirNome(nome){
    this.#nome = nome;
}

get obterSobrenome(){
    return this.#sobrenome;
}
set definirSobrenome(sobrenome){
    this.#sobrenome = sobrenome;
}

get obterSaldo(){
    return this.#saldo;
}
set definirSaldo(saldo){
    this.#saldo = saldo;
}

}

const clienteConta = new ContaDeBanco('Kamila', 'Rocha', 1000);

console.log(`${clienteConta.obterNome} ${clienteConta.obterSobrenome} ${clienteConta.obterSaldo}`);

// Propriedade que retorna o a seguinte string "O cliente [nome do cliente] possui XXXX de saldo no banco



// class ContaDeBanco {
//     #nome;
//     #saldo;
      
//     constructor(nome, saldo) {
//       this.#nome = nome;
//       this.#saldo = saldo;
//     }
  
//     get possibilidadeDeEmprestimo() {
//       return this.#saldo > 2000;
//     }
  
//     get status() {
//       return `O cliente ${this.#nome} possui o saldo ${this.#saldo}`;
//       // crase
//       // `= backtick
//     }
//   }
  
  
//   const contaAndre = new ContaDeBanco('André', 1000)
//   // contaAndre.saldo
//   // contaAndre.saldo = 9999
  
//   console.log(contaAndre.saldo)
//   console.log(contaAndre.possibilidadeDeEmprestimo)