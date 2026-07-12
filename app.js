const cambiarModo = document.getElementById("cambiarModo");
const logoLinkedin = document.getElementById("logoLinkedin");
const logoGithub = document.getElementById("logoGithub");
const btnIdioma = document.getElementById("btnIdioma");

let idiomaActual = "esp";

btnIdioma.addEventListener("click", () => {
  idiomaActual = idiomaActual === "esp" ? "eng" : "esp";

  cargarIdioma(idiomaActual);

  btnIdioma.textContent = idiomaActual === "esp" ? "ENG" : "ESP";
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
  heroDescripcion: document.getElementById("heroDesscripcion"),
  heroProyectos: document.getElementById("heroProyectos"),
  heroDescripcion: document.getElementById("heroDescripcion"),
  heroProyectos: document.getElementById("heroProyectos"),

  //proyectos
  proyectosDescripcion: document.getElementById("proyectosDescripcion"),
  proyectosH2: document.getElementById("proyectosH2"),
  proyectosDescripcionHuellas: document.getElementById("proyectosDescripcionHuellas"),
};

async function cargarIdioma(lang) {
  const respuesta = await fetch(`./idiomas/${lang}.json`);
  const texto = await respuesta.json();

  //navbar
  elementos.navInicio.textContent = texto.navInicio;
  elementos.navSobreMi.textContent = texto.navSobreMi;
  elementos.navTecnologias.textContent = texto.navTecnologias;
  elementos.navProyectos.textContent = texto.navProyectos;
  elementos.navFormacion.textContent = texto.navFormacion;
  elementos.btnCv.textContent = texto.btnCv;
  elementos.btnContacto.textContent = texto.btnContacto;

  //hero
  elementos.heroSaludo.textContent = texto.heroSaludo;
  elementos.heroTitulo.innerHTML = texto.heroTitulo;
  elementos.heroDescripcion.innerHTML = texto.heroDescripcion;
  elementos.heroProyectos.textContent = texto.heroProyectos;

  //proyectos
  elementos.proyectosDescripcion.textContent = texto.proyectosDescripcion;
  elementos.proyectosH2.innerHTML = texto.proyectosH2;
  elementos.proyectosDescripcionHuellas.innerHTML = texto.proyectosDescripcionHuellas;
}

//cerrar el menú en cualquier parte.
document.addEventListener("click", (e) => {
  const menu = document.getElementById("navbarNav");
  const boton = document.querySelector(".navbar-toggler");

  if (
    menu.classList.contains("show") &&
    !menu.contains(e.target) &&
    !boton.contains(e.target)
  ) {
    const bsCollapse = bootstrap.Collapse.getInstance(menu);
    bsCollapse.hide();
  }
});

cambiarModo.addEventListener("click", () => {
  console.log("vamos bien");

  const fondoActual = getComputedStyle(document.documentElement)
    .getPropertyValue("--bg")
    .trim();

  if (fondoActual === "#f5efe7") {
    document.documentElement.style.setProperty("--bg", "#1f1915");
    document.documentElement.style.setProperty("--bg-soft", "#2c241f");
    document.documentElement.style.setProperty(
      "--nav-bg",
      "rgba(31, 25, 21, 0.92)",
    );
    document.documentElement.style.setProperty(
      "--nav-border",
      "rgba(214, 138, 87, 0.12)",
    );
    document.documentElement.style.setProperty("--green", "#97a57b");
    document.documentElement.style.setProperty("--green-light", "#4f5a43");
    document.documentElement.style.setProperty("--accent", "#d68a57");
    document.documentElement.style.setProperty("--accent-dark", "#9e5c33");
    document.documentElement.style.setProperty("--text-soft", "#c2b6a8");
    document.documentElement.style.setProperty("--white", "#362d28");
    document.documentElement.style.setProperty("--text", "#f4eee6");
    document.documentElement.style.setProperty(
      "--toggle-bg",
      "rgba(214,138,87,.12)",
    );
    document.documentElement.style.setProperty("--toggle-text", "#f4eee6");

    logoGithub.style.filter = "brightness(0) invert(1)";
    logoLinkedin.style.filter = "brightness(0) invert(1)";
  } else {
    document.documentElement.style.setProperty("--bg", "#f5efe7");
    document.documentElement.style.setProperty("--bg-soft", "#e9e2d8");
    document.documentElement.style.setProperty(
      "--nav-bg",
      "rgba(245, 239, 231, 0.8)",
    );
    document.documentElement.style.setProperty(
      "--nav-border",
      "rgba(0, 0, 0, 0.03)",
    );
    document.documentElement.style.setProperty("--text", "#3a2b22");
    document.documentElement.style.setProperty("--text-soft", "#66564a");
    document.documentElement.style.setProperty("--white", "#fffdf9");
    document.documentElement.style.setProperty("--green-light", "#d7dec8");
    document.documentElement.style.setProperty("--accent-dark", "#5b3923");

    document.documentElement.style.setProperty("--toggle-bg", "transparent");

    document.documentElement.style.setProperty("--toggle-text", "#3a2b22");

    logoGithub.style.filter = "none";
    logoLinkedin.style.filter = "none";
  }
});

cambiarIdioma(idiomaActual);
