// a função para gerar um número é chamada no início do jogo, mesmo tendo sido criada bem depois, assim, quando é chamada, ela dá irá gerar o número secreto .
let listaNumSorteados=[];
let numLimite=10;
let numSecreto = sugerirNumAleatorio();
let tentativas = 1;

// manipulando linha 22 - Titulo

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';

// manipulando linha 23 - Parágrafo - inserindo os alerts

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML='Escolha um número entre 1 e 10';

// manipulando os textos através de uma função:

function alterarTextos(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    
alterarTextos('h1', 'Jogo do Número Secreto');
alterarTextos('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

// manipulando linha 27 - butão de chute

function verificarChute(){
    
    let chute = document.querySelector('input').value;

    if(numSecreto== chute){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas= (`Parabéns! Você acertou o Número Secreto com ${tentativas} ${palavraTentativa}`);
        alterarTextos('p', mensagemTentativas);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`)
    }else{
        if(numSecreto>chute){
            alterarTextos('p', 'Poxa :( , você errou, digitou um número menor');
        }else{
            alterarTextos('p', 'Poxa :( , você errou, digitou um número maior');

        }
        tentativas++;
        limparCampo();
    }
    
    // console.log('O botão foi clicado');
    console.log(numSecreto);
    console.log(chute == numSecreto);
}

function sugerirNumAleatorio() {

    let numEscolhido= parseInt(Math.random () * numLimite + 1);
    let quatdeElementosLista = listaNumSorteados.length;

    if (quatdeElementosLista == numLimite){
        listaNumSorteados=[];
    }

    if(listaNumSorteados.includes(numEscolhido)){
        return sugerirNumAleatorio();
    }else{
        listaNumSorteados.push(numEscolhido);
        console.log(listaNumSorteados);
        return numEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value='';
}

function reiniciarJogo(){
    numSecreto=sugerirNumAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById(`reiniciar`).setAttribute(`disabled`, true);
}    