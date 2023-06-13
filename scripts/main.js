/*===CODIGO PARA DESPLEGAR Y CONTRAER EL MENÚ HAMBURGUESA=== */
const nav = document.querySelector("#nav");
const abrirMenu = document.querySelector("#abrir");
const cerrarMenu = document.querySelector("#cerrar");

/*Al hacer click en boton de id abrir se le agrega la clase visible a nav */
abrirMenu.addEventListener("click", () => {
  nav.classList.add("visible");
});

/*Al hacer clic en boton  cerrar se le quita la clase visible */
cerrarMenu.addEventListener("click", () => {
  nav.classList.remove("visible");
});

/* ======EFECTO MÁQUINA DE ESCRIBIR en page nosotros.html====*/ 
const titleEffect = document.getElementById('typewriter');

const typeWriter = new Typewriter (titleEffect, {
   loop: true,
   delay: 77
});
/*Métodos que se pueden aplicar a la instancia de objeto anteriormente creada*/
typeWriter
 .typeString('Anímate a conocernos...')
 .pauseFor(200)
 .start();




