const form = document.getElementById('form-contato');
const nome = [];
const numero = []; 

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela()
});

function adicionaLinha(){
    const inputNomecontato = document.getElementById('nome-contato')
    const inputNumerocontato = document.getElementById('numero-contato')

    if(nome.includes(inputNomecontato.value)){
        alert (`O contato de: ${inputNomecontato.value} Já foi adicionado a sua agenda`);
    } else{
    nome.push(inputNomecontato.value);
    numero.push(parseFloat(inputNumerocontato.value));


    let linha = '<tr>';
    linha +=`<td> ${inputNomecontato.value} </td>`
    linha +=`<td> ${inputNumerocontato.value} </td>`
    linha +=`</tr>`

    linhas += linha;

    }

    inputNomecontato.value = '';
    inputNumerocontato.value = '';
    };

    function atualizaTabela(){
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    };