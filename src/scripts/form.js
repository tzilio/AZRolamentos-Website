// form.js

// Função para validar e enviar o formulário
function checkValidations() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let valid = true;

    // Validação do nome
    if (name === '') {
        document.querySelector('.name-error').textContent = 'Por favor, insira seu nome.';
        valid = false;
    } else {
        document.querySelector('.name-error').textContent = '';
    }

    // Validação do email
    if (email === '') {
        document.querySelector('.email-error').textContent = 'Por favor, insira seu email.';
        valid = false;
    } else {
        document.querySelector('.email-error').textContent = '';
    }

    // Validação da mensagem
    if (message.length < 1) {
        document.querySelector('.message-error').textContent = 'A mensagem está vazia';
        valid = false;
    } else {
        document.querySelector('.message-error').textContent = '';
    }

    if (valid) {
        saveFormData(name, email, message);
    }

    return valid;
}

// Função para salvar os dados do formulário em um arquivo
function saveFormData(name, email, message) {
    const formData = {
        name: name,
        email: email,
        message: message,
    };

    // Converte os dados para JSON
    const jsonData = JSON.stringify(formData);

    // Simula o salvamento em um arquivo
    downloadFile('form_data.json', jsonData);
}

// Função para baixar o arquivo com os dados
function downloadFile(filename, content) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);

    document.body.appendChild(element);
    element.click();

    document.body.removeChild(element);
}

// Função de reset do formulário
function reset() {
    document.getElementById('submit-form').reset();
    document.querySelectorAll('small').forEach(small => small.textContent = '');
}


