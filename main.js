document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("form-deposito");
    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    let formEvalido = false;

    function validaNome(nomeCompleto) {
        const nomeComoArray = nomeCompleto.split(" ");
        return nomeComoArray.length >= 2;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const numeroContaBeneficiario = document.getElementById('numero-conta');
        const valorDeposito = document.getElementById('valor-deposito');

        if (validaNome(nomeBeneficiario.value)) {
            formEvalido = true;
        }


        if (formEvalido) {
            const mensagemSucesso = `Montante de: <b> ${valorDeposito.value} </b> depositado para o cliente: <b> ${nomeBeneficiario.value} </b> - conta: <b> ${numeroContaBeneficiario.value} </b> `;
            const containerMensagemSucesso = document.querySelector(".success-message"); // Corrigido para corresponder à classe do HTML
            containerMensagemSucesso.innerHTML = mensagemSucesso;
            containerMensagemSucesso.style.display = "block";

            nomeBeneficiario.value = '';
            numeroContaBeneficiario.value = '';
            valorDeposito.value = '';
        } else {
            nomeBeneficiario.style.border = '1px solid red'; // Alterado para vermelho para indicar erro
            // Adicione a classe .mensagem-erro ao seu HTML ou remova esta linha
            document.querySelector(".mensagem-erro").style.display = "block";
        }
    });

    nomeBeneficiario.addEventListener("change", function (e) {
        formEvalido = validaNome(e.target.value);

        if (!formEvalido) {
            nomeBeneficiario.style.border = "1px solid red"; // Alterado para vermelho para indicar erro
            // Adicione a classe .mensagem-erro ao seu HTML ou remova esta linha
            document.querySelector(".mensagem-erro").style.display = "block";
        } else {
            nomeBeneficiario.style.border = ""; // Reset para o estilo padrão
            // Adicione a classe .mensagem-erro ao seu HTML ou remova esta linha
            document.querySelector(".mensagem-erro").style.display = "none";
        }
    });
});