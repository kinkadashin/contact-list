const form = document.getElementById('form')
const nomes = [];
const telefones = [];
let linhas = "";
const nomeUser = prompt('Qual é o seu nome?')

adicionarNome()

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionarLinha()
    atualizarTabela()
})

function adicionarNome() {
    const span = document.getElementById('person')
    span.innerHTML = nomeUser
}

function adicionarLinha() {
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    if (nomes.includes(inputNome.value)) {
        alert(`O usuario ${inputNome.value} já foi inserido(a).`)
    } else {
        nomes.push(inputNome.value);
        telefones.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}