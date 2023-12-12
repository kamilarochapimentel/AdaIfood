// Criar um jogo da forca usando OO;
// Pelo menos três classes para três entidades presentes no sistema
// do jogo (GameController, Player e Match);
// O usuário deve poder chutar a palavra de uma vez;
// O usuário deve poder jogar/tentar novamente (reiniciar);
// Deve haver uma dica ou tema visualmente indicados;
// O jogo deve possuir pontuação;


const readline = require('readline');

// while(jogar==sim){

class GameController {
    constructor() {
        this.jogador = new Jogador();
        this.partida = new Partida();
        this.leitor = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.tema = "Sei lá"; // Dica ou tema visualmente indicados
        
    }

    iniciarJogo() {
        console.log("\nBem-vindo ao Jogo da Forca!")
        console.log (`Tema: ${this.tema}`);
        this.exibirStatusPalavra();

        this.fazerPalpite();
    }

    exibirStatusPalavra() {
        console.log(`Palavra: ${this.partida.obterExibicaoPalavra()}`);
    }

    fazerPalpite() {
        this.leitor.question('Faça um palpite ou chute a palavra inteira: ', (input) => {
            if (input.length > 1) {
                this.verificarPalavraInteira(input);
            } else if (input.match(/[a-z]/)) {
                this.verificarLetra(input.toLowerCase());
            } else {
                console.log('Palpite inválido. Tente novamente.');
                this.fazerPalpite();
            }
        });
    }

    verificarLetra(letra) {
        if (this.partida.verificarLetra(letra)) {
            console.log(`Letra '${letra}' correta!`);
            this.exibirStatusPalavra();

            if (this.partida.estaCompleta()) {
                console.log('Parabéns! Você venceu!');
                this.finalizarJogo();
                pontos=1;
            } else {
                this.fazerPalpite();
            }
        } else {
            console.log(`Letra '${letra}' incorreta. Tentativas restantes: ${this.partida.tentativasRestantes}`);
            if (this.partida.tentativasRestantes === 0) {
                console.log(`Você perdeu. A palavra correta era: ${this.partida.obterPalavra()}`);
                this.finalizarJogo();
            } else {
                this.fazerPalpite();
            }
        }
    }

    verificarPalavraInteira(palavra) {
        if (this.partida.verificarPalavraInteira(palavra.toLowerCase())) {
            console.log(`Parabéns! Você venceu! A palavra correta era: ${this.partida.obterPalavra()}`);
            this.finalizarJogo();
            
        } else {
            console.log(`Palavra incorreta. Tentativas restantes: ${this.partida.tentativasRestantes}`);
            if (this.partida.tentativasRestantes === 0) {
                console.log(`Você perdeu. A palavra correta era: ${this.partida.obterPalavra()}`);
                this.finalizarJogo();
            } else {
                this.fazerPalpite();
            }
        }
    }

    finalizarJogo() {
        console.log(`Pontuação final: ${this.jogador.obterPontuacao()}`);
        
        this.leitor.close();
    }
}

class Jogador {
    constructor() {
        // this.GameController = new GameController();
        this.partida = new Partida();
        this.pontuacao = 0;
    }

    obterPontuacao(pontos) {
        if (pontos > 0) {
            pontos=1;
            return  this.pontuacao+=pontos;
        } else{
        return this.pontuacao;
    }
 }
}

class Partida {
    constructor() {
        this.listaPalavras= ["flores", "brutus", "amor", "paralelepipedo", "kamila"];
        this.palavra = this.escolherPalavraAleatoria();
        this.palpites = new Set();
        this.tentativasRestantes = 6;
    }

    escolherPalavraAleatoria() {
        const indiceAleatorio = Math.floor(Math.random() * this.listaPalavras.length);
        return this.listaPalavras[indiceAleatorio];
    }

    // CRIAR FUNÇÃO TEMA

    verificarLetra(letra) {
        if (!this.palpites.has(letra) && this.palavra.includes(letra)) {
            this.palpites.add(letra);
            return true;
        } else {
            this.tentativasRestantes--;
            return false;
        }
    }

    verificarPalavraInteira(palavra) {
        if (palavra === this.palavra) {
            return true;
        } else {
            this.tentativasRestantes--;
            return false;
        }
    }

    obterExibicaoPalavra() {
        let exibicao = '';
        for (const char of this.palavra) {
            exibicao += this.palpites.has(char) ? char : '_ ';
        }
        return exibicao;
    }

    obterPalavra() {
        return this.palavra;
    }

    estaCompleta() {
        return this.obterExibicaoPalavra() === this.palavra;
    }
}

const controladorJogo = new GameController();
controladorJogo.iniciarJogo();