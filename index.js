
  const form = document.getElementById("contactForm");
  const formMsg = document.getElementById("formMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // mostra a mensagem
    formMsg.textContent = "Mensagem enviada com sucesso!";

    // limpa o formulário
    form.reset();

    // remover  mensagem depois de 3 segundos
    setTimeout(function () {
      formMsg.textContent = "";
    }, 3000);
  });

