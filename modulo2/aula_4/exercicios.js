//1) Verificação de Idade:
//Peça ao usuário para inserir sua idade e, em seguida, use um bloco if-else 
//para verificar se ele é maior de idade (18 anos ou mais) ou menor de idade.

// let idade = 25;

// if (idade <18){
//     console.log("menor de idade")
// } else{
//     console.log("maior de idade")
// }


//2)  Maior de Três Números:
//Peça ao usuário para inserir três números e use estruturas condicionais 
//if e else para determinar qual deles é o maior.

// let numero_um=62;
// let numero_dois=29;
// let numero_tres=89;

// if (numero_um > numero_dois && numero_um >numero_tres){
//         console.log("Maior número: "+numero_um);
// }
// else if (numero_dois > numero_um && numero_dois > numero_tres){
//         console.log("Maior número: "+numero_dois);
// }
// else if (numero_tres > numero_um && numero_tres > numero_dois){
//     console.log("Maior número: "+numero_tres);

// } else{
//     console.log("Maior número: "+numero_tres);
// }


//3) Calculadora de IMC:
//Crie uma calculadora de índice de massa corporal (IMC) que peça ao usuário 
//para inserir seu peso e altura. Em seguida, use um bloco if-else para exibir uma mensagem que classifica a condição do usuário com base no IMC calculado.

// IMC <18,5kg/m2 - baixo peso.
// IMC >18,5 até 24,9kg/m2 - eutrofia (peso adequado)
// IMC ≥25 até 29,9kg/m2 - sobrepeso.
// IMC >30,0kg/m2 até 34,9kg/m2 - obesidade grau 1.
// IMC >35kg/m2 até 39,9kg/m2 - obesidade grau 2.
// IMC > 40kg/m2 - obesidade extrema.

let altura =1.56;
let peso=68;
let IMC= peso/(altura*altura);

if (IMC <18.5){
    console.log("baixo peso");
}

else if (IMC >= 18.5 && IMC<25){
    console.log("peso adequado");
}

else if (IMC >= 25 && IMC <30){
    console.log("sobrepeso");
}

else if (IMC >= 30 && IMC <35){
    console.log("obesidade grau 1");
}

else if (IMC >= 35 && IMC <40){
    console.log("obesidade grau 2");
} else{
    console.log("obesidade extrema");
}


//4) Conversão de Temperatura:
//Peça ao usuário para inserir uma temperatura em graus Celsius e use uma 
//instrução if-else para converter essa temperatura para Fahrenheit ou vice-versa, 
//com base na escolha do usuário.

//5) Validação de Login:
//Crie um formulário de login que solicite ao usuário um nome de usuário 
//e uma senha. Use estruturas if-else para verificar se as credenciais inseridas 
//estão corretas ou não.

//6) Verificação de numero par ou impar: 
//Solicite ao usuário para inserir um número e use uma estrutura if-else para 
//determinar se o número é par ou ímpar.