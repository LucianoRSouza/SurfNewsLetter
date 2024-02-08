document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura o valor do email inserido pelo usuário
    var email = document.getElementById('email').value;

    // Aqui você pode adicionar a lógica para enviar o email para o backend
    // Por enquanto, apenas exibiremos o email no console
    console.log('Email submitted:', email);
});
