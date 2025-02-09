document.getElementById("reservaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData(this);
    let scriptURL = "https://script.google.com/macros/s/AKfycbzGJFxjWU4mIwprWXpgEBL6lTTJR7BE-lSHzCIBx0LW6kLeEuonr9dY8D-nWdyeVHDQ/exec";

    fetch(scriptURL, { method: "POST", body: formData })
        .then(response => {
            document.getElementById("mensagem").style.display = "block";
            enviarEmail(formData);
        })
        .catch(error => console.error("Erro ao enviar reserva:", error));
});

function enviarEmail(formData) {
    let emailURL = "https://api.emailjs.com/api/v1.0/email/send";

    let data = {
        service_id: "service_tyd0d9s", // Seu Service ID
        template_id: "template_7603c6a", // Seu Template ID
        user_id: "eubFM0q1g0av6vyCW", // Sua Public Key
        template_params: {
            nome: formData.get("nome"),
            email: formData.get("email"),
            data: formData.get("data"),
            hospedes: formData.get("hospedes"),
        }
    };

    fetch(emailURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => console.log("E-mail enviado!"))
    .catch(error => console.error("Erro ao enviar e-mail:", error));
}
