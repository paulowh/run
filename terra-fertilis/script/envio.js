// Função para obter os valores da query string da URL
function obterParametro(nome) {
    var parametros = new URLSearchParams(window.location.search);
    return parametros.get(nome);
}

// Recupera os valores da query string e exibe na página
var nome = obterParametro('nome');
var email = obterParametro('email');
var assunto = obterParametro('assunto');
var mensagem = obterParametro('mensagem');

elementNome = document.createElement('h1')
elementNome.textContent = nome


document.getElementById('nome').append(elementNome || 'Não informado');
document.getElementById('email').innerHTML = email || 'Não informado';
document.getElementById('assunto').innerHTML = assunto || 'Não informado';
document.getElementById('mensagem').innerHTML = mensagem || 'Não informado';

// setTimeout(window.location.href = 'https://www.google.com', 10000)