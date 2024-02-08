document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura o valor do email inserido pelo usuário
    var email = document.getElementById('email').value;

    // Cria um objeto de dados para enviar ao backend
    var formData = {
        email: email
    };

    // Envia os dados para o backend usando uma solicitação AJAX
    fetch('/submit_email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            console.log('Email submitted successfully');
            // Aqui você pode adicionar qualquer lógica adicional, como mostrar uma mensagem de sucesso para o usuário
        } else {
            console.error('Failed to submit email');
            // Aqui você pode adicionar tratamento de erro, se necessário
        }
    })
    .catch(error => {
        console.error('Error submitting email:', error);
        // Aqui você pode adicionar tratamento de erro, se necessário
    });
});
