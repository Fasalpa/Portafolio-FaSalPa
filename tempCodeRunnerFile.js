const cambiarModo = document.getElementById("cambiarModo");
const logoLinkedin = document.getElementById("logoLinkedin");
const logoGithub = document.getElementById("logoGithub");
const btnIdioma = document.getElementById("btnIdioma");

let idiomaActual = "es";

btnIdioma.addEventListener("click", () => {
  idiomaActual = idiomaActual === "es" ? "en" : "es";

  cambiarIdioma(idiomaActual);
});

const elementos = {
  //navbar

  navInicio: document.getElementById("navInicio"),
  navSobreMi: document.getElementById("navSobreMi"),
  navTecnologias: document.getElementById("navTecnologias"),
  navProyectos: document.getElementById("navProyectos"),
  navFormacion: document.getElementById("navFormacion"),
  btnCv: document.getElementById("btnCv"),
  btnContacto: document.getElementById("btnContacto"),

  //hero
  heroSaludo: document.getElementById("heroSaludo"),
  heroTitulo: document.getElementById("heroTitulo"),
  heroResaltar: document.getElementById("heroResaltar"),
  heroDescripcion: document.getElementById("heroDesscripcion"),
  heroProyectos: document.getElementById("heroProyectos"),
};
console.log(heroResaltar);