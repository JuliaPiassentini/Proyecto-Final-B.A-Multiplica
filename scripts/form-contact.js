/*FORMULARIO DE CONTACTO*/

document
  .getElementById("formulario-contact")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Gracias por escribirnos te responderemos a la brevedad");
    document.getElementById("formulario-contact").reset();
  });
