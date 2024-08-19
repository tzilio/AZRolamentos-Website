// script.js

// Função para rolar para o topo da página
function scrollToTop() {
   window.scrollTo({
       top: 0,
       behavior: 'smooth' // Adiciona um efeito de rolagem suave
   });
}

// subscribed-emails

// script.js

document.addEventListener('DOMContentLoaded', function () {
   const subscribeForm = document.getElementById('subscribeForm');

   if (subscribeForm) {
       subscribeForm.addEventListener('submit', function (event) {
           event.preventDefault();

           const emailInput = document.getElementById('email');
           const email = emailInput.value;

           // Validação simples de e-mail no cliente
           if (!isValidEmail(email)) {
               alert('Por favor, insira um endereço de e-mail válido.');
               return;
           }

           // Enviar o e-mail para o backend
           fetch('http://localhost:3000/subscribe', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/x-www-form-urlencoded',
               },
               body: `email=${encodeURIComponent(email)}`,
           })
           .then(response => response.text())
           .then(message => {
               alert(message);
               subscribeForm.reset();
           })
           .catch(error => {
               console.error('Erro:', error);
               alert('Ocorreu um erro durante a inscrição. Por favor, tente novamente mais tarde.');
           });
       });

       function isValidEmail(email) {
           // Regex básico para validar e-mails
           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
           return emailRegex.test(email);
       }
   }
});
