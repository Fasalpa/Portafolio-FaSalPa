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
};

const idioma = {
  es: {
    inicio: "Inicio",
    sobreMi: "Sobre mí",
    tecnologias: "Tecnologías",
    proyectos: "Proyectos",
    formacion: "Formación",
    cv: "CV",
    contacto: "Hablemos",
    cvArchivo: "./docs/CV-Robinson-Fabian-Salamanca-Palacio-ES.pdf",
  },
  en: {
    inicio: "Home",
    sobreMi: "About",
    tecnologias: "Technologies",
    proyectos: "Projects",
    formacion: "Education",
    cv: "Resume",
    contacto: "Let's talk",
    cvArchivo: "./docs/Cv-Robinson-Fabian-Salamanca-Palacio-EN.pdf",
  },
};

function cambiarIdioma(lang) {
  elementos.navInicio.textContent = idioma[lang].inicio;
  elementos.navSobreMi.textContent = idioma[lang].sobreMi;
  elementos.navTecnologias.textContent = idioma[lang].tecnologias;
  elementos.navProyectos.textContent = idioma[lang].proyectos;
  elementos.navFormacion.textContent = idioma[lang].formacion;

  btnIdioma.textContent = lang === "es" ? "EN" : "ES";
  elementos.btnCv.textContent = idioma[lang].cv;
  elementos.btnContacto.textContent = idioma[lang].contacto;
  elementos.btnCv.href = idioma[lang].cvArchivo;
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
