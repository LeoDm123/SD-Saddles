const form = document.getElementById("contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const serviceUrl = "https://api.example.com/send-email";
  const formData = { email, subject, message };

  fetch(serviceUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        alert("¡Correo enviado con éxito!");
      } else {
        alert("Error al enviar el correo. Por favor, inténtalo de nuevo.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Ocurrió un error. Por favor, inténtalo de nuevo más tarde.");
    });
});
