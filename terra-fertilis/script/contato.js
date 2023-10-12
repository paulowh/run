document.getElementById('meuFormulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var assunto = document.getElementById('assunto').value;
    var mensagem = document.getElementById('mensagem').value;

    // Codifica os valores para passar na URL
    var nomeCodificado = encodeURIComponent(nome);
    var emailCodificado = encodeURIComponent(email);
    var assuntoCodificado = encodeURIComponent(assunto);
    var mensagemCodificado = encodeURIComponent(mensagem);

    // Redireciona para a próxima página com os parâmetros na URL
    window.location.href = '../envio.html' +
        '?nome=' + nomeCodificado +
        '&email=' + emailCodificado +
        '&assunto=' + assuntoCodificado +
        '&mensagem=' + mensagemCodificado;
});