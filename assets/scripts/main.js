var contactos = [];

function irA(selector) {
  var elemento = document.querySelector(selector);
  if (elemento) {
    elemento.scrollIntoView({ behavior: "smooth" });
  }
}

function agregarContacto() {
  var nombre = prompt("Ingresa tu nombre:");
  if (!nombre || nombre.trim() === "") return;

  var correo = prompt("Ingresa tu correo:");
  if (!correo || correo.trim() === "") return;

  contactos.push({
    nombre: nombre.trim(),
    correo: correo.trim()
  });

  alert("Contacto guardado: " + nombre.trim() + " (" + correo.trim() + ")");
}

document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll("header nav ul li");
  var botonesHero = document.querySelectorAll("#hero button");
  var botonContactar = document.querySelector("header nav button");

  if (menuItems[0]) menuItems[0].onclick = function () { irA("#hero"); };
  if (menuItems[1]) menuItems[1].onclick = function () { irA("#Benefits"); };
  if (menuItems[2]) menuItems[2].onclick = function () { irA("#Benefits"); };
  if (menuItems[3]) menuItems[3].onclick = function () { irA("#Reviews"); };

  if (botonesHero[0]) botonesHero[0].onclick = function () { irA("#Benefits"); };
  if (botonesHero[1]) botonesHero[1].onclick = function () { irA("#Reviews"); };

  if (botonContactar) {
    botonContactar.onclick = agregarContacto;
  }
});
