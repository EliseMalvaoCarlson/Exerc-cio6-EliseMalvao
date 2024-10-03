document.getElementById('saudacaoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém o valor do campo de texto
    var nome = document.getElementById('nome').value;

    // Verifica se o campo está vazio
    if (nome.trim() == '') {
        // Exibe mensagem de erro
        document.getElementById('mensagem').textContent = 'Por favor, insira seu nome.';
    } else {
        // Cria a mensagem de saudação
        var mensagem = 'Olá, ' + nome + '! Seja bem-vindo(a)!';

        // Exibe a mensagem no parágrafo
        document.getElementById('mensagem').textContent = mensagem;
    }
});

