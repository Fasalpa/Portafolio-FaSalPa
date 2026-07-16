const cambiarModo = document.getElementById("cambiarModo");
const logoLinkedin = document.getElementById("logoLinkedin");
const logoGithub = document.getElementById("logoGithub");
const LogoGitHub2 = document.getElementById("LogoGitHub2");
const btnIdioma = document.getElementById("btnIdioma");
const githubLogo = document.getElementById("githubLogo");
const linkedinLogo = document.getElementById("linkedinLogo");
const mailLogo = document.getElementById("mailLogo");

let idiomaActual = "esp";

btnIdioma.addEventListener("click", (e) => {
  e.preventDefault();
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
  proyectosDescripcionTerraViva: document.getElementById(
    "proyectosDescripcionTerraViva",
  ),
  proyectosDescripcionBurgueHub: document.getElementById(
    "proyectosDescripcionBurgueHub",
  ),
  proyectosDescripcionToDoList: document.getElementById(
    "proyectosDescripcionToDoList",
  ),

  verDespliegue: document.querySelectorAll(".verDespliegue"),
  verCodigo: document.querySelectorAll(".verCodigo"),
  //sobre mi
  sobreMiDescripcion: document.getElementById("sobreMiDescripcion"),
  sobreMiTitulo: document.getElementById("sobreMiTitulo"),
  sobreMiPrimerTexto: document.getElementById("sobreMiPrimerTexto"),
  sobreMiSegundoTexto: document.getElementById("sobreMiSegundoTexto"),
  sobreMiTercerTexto: document.getElementById("sobreMiTercerTexto"),
  sobreMiCuartoTexto: document.getElementById("sobreMiCuartoTexto"),
  btnDescargarCv: document.getElementById("btnDescargarCv"),
  sobreMiProyectos: document.getElementById("sobreMiProyectos"),
  sobreMiAprendiendo: document.getElementById("sobreMiAprendiendo"),
  sobreMiMotivacion: document.getElementById("sobreMiMotivacion"),

  //habilidades
  tecnologiasDescripcion: document.getElementById("tecnologiasDescripcion"),
  tecnologiasTitulo: document.getElementById("tecnologiasTitulo"),
  tecnologiasHerramientas: document.getElementById("tecnologiasHerramientas"),
  tecnologiasBases: document.getElementById("tecnologiasBases"),
  tecnologiasProductividad: document.getElementById("tecnologiasProductividad"),

  //formacion
  educacionDescripcion: document.getElementById("educacionDescripcion"),
  educacionTitulo: document.getElementById("educacionTitulo"),
  educacionTecnico: document.getElementById("educacionTecnico"),
  educacionTecnicoDescripcion: document.getElementById(
    "educacionTecnicoDescripcion",
  ),
  educacionTecnologo: document.getElementById("educacionTecnologo"),
  educacionTecnologoDescripcion: document.getElementById(
    "educacionTecnologoDescripcion",
  ),
  educacionPlatzi: document.getElementById("educacionPlatzi"),
  educacionPlatziDescripcion: document.getElementById(
    "educacionPlatziDescripcion",
  ),
  educacionEstado: document.getElementById("educacionEstado"),
  educacionUnad: document.getElementById("educacionUnad"),
  educacionUnad: document.getElementById("educacionUnad"),
  educacionUnadDescripcion: document.getElementById("educacionUnadDescripcion"),
  educacionGeneration: document.getElementById("educacionGeneration"),
  educacionGenerationDescripcion: document.getElementById(
    "educacionGenerationDescripcion",
  ),

  //contacto
  contactoDescripcion: document.getElementById("contactoDescripcion"),
  contactoTitulo: document.getElementById("contactoTitulo"),
  contactoDescripcionLarga: document.getElementById("contactoDescripcionLarga"),
  contactoCv: document.getElementById("contactoCv"),
  contactoMail: document.getElementById("contactoMail"),

  //footer
  footerDescripcion: document.getElementById("footerDescripcion"),
  footerInicio: document.getElementById("footerInicio"),
  footerSobreMi: document.getElementById("footerSobreMi"),
  footerProyectos: document.getElementById("footerProyectos"),
  footerFormacion: document.getElementById("footerFormacion"),
  footerDescripcionFinal: document.getElementById("footerDescripcionFinal"),
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
  elementos.btnContacto.textContent = texto.btnContacto;

  //hero
  elementos.heroSaludo.textContent = texto.heroSaludo;
  elementos.heroTitulo.innerHTML = texto.heroTitulo;
  elementos.heroDescripcion.innerHTML = texto.heroDescripcion;
  elementos.heroProyectos.textContent = texto.heroProyectos;

  //proyectos
  elementos.proyectosDescripcion.textContent = texto.proyectosDescripcion;
  elementos.proyectosH2.innerHTML = texto.proyectosH2;
  elementos.proyectosDescripcionTerraViva.innerHTML =
    texto.proyectosDescripcionTerraViva;
  elementos.proyectosDescripcionBurgueHub.innerHTML =
    texto.proyectosDescripcionBurgueHub;
  elementos.proyectosDescripcionToDoList.innerHTML =
    texto.proyectosDescripcionToDoList;

  elementos.verDespliegue.forEach((elemento) => {
    elemento.textContent = texto.verDespliegue;
  });
  elementos.verCodigo.forEach((elemento) => {
    elemento.textContent = texto.verCodigo;
  });

  // sobre mi

  elementos.sobreMiDescripcion.textContent = texto.sobreMiDescripcion;
  elementos.sobreMiTitulo.innerHTML = texto.sobreMiTitulo;
  elementos.sobreMiPrimerTexto.innerHTML = texto.sobreMiPrimerTexto;
  elementos.sobreMiSegundoTexto.innerHTML = texto.sobreMiSegundoTexto;
  elementos.sobreMiTercerTexto.innerHTML = texto.sobreMiTercerTexto;
  elementos.sobreMiCuartoTexto.innerHTML = texto.sobreMiCuartoTexto;
  elementos.sobreMiProyectos.innerHTML = texto.sobreMiProyectos;
  elementos.sobreMiAprendiendo.innerHTML = texto.sobreMiAprendiendo;
  elementos.sobreMiMotivacion.innerHTML = texto.sobreMiMotivacion;

  //habilidades

  elementos.tecnologiasDescripcion.textContent = texto.tecnologiasDescripcion;
  elementos.tecnologiasTitulo.innerHTML = texto.tecnologiasTitulo;
  elementos.tecnologiasHerramientas.innerHTML = texto.tecnologiasHerramientas;
  elementos.tecnologiasBases.innerHTML = texto.tecnologiasBases;
  elementos.tecnologiasProductividad.innerHTML = texto.tecnologiasProductividad;

  //formación

  elementos.educacionDescripcion.textContent = texto.educacionDescripcion;
  elementos.educacionTitulo.innerHTML = texto.educacionTitulo;
  elementos.educacionTecnico.textContent = texto.educacionTecnico;
  elementos.educacionTecnicoDescripcion.innerHTML =
    texto.educacionTecnicoDescripcion;
  elementos.educacionTecnico.textContent = texto.educacionTecnico;
  elementos.educacionTecnologo.textContent = texto.educacionTecnologo;
  elementos.educacionTecnologoDescripcion.innerHTML =
    texto.educacionTecnologoDescripcion;
  elementos.educacionPlatzi.textContent = texto.educacionPlatzi;
  elementos.educacionPlatziDescripcion.innerHTML =
    texto.educacionPlatziDescripcion;
  elementos.educacionEstado.textContent = texto.educacionEstado;
  elementos.educacionUnad.textContent = texto.educacionUnad;
  elementos.educacionUnadDescripcion.innerHTML = texto.educacionUnadDescripcion;
  elementos.educacionGeneration.textContent = texto.educacionGeneration;
  elementos.educacionGenerationDescripcion.innerHTML =
    texto.educacionGenerationDescripcion;
  elementos.contactoDescripcion.textContent = texto.contactoDescripcion;
  elementos.contactoTitulo.textContent = texto.contactoTitulo;
  elementos.contactoDescripcionLarga.innerHTML = texto.contactoDescripcionLarga;
  elementos.contactoMail.innerHTML = texto.contactoMail;
  //footer
  elementos.footerDescripcion.innerHTML = texto.footerDescripcion;
  elementos.footerInicio.textContent = texto.footerInicio;
  elementos.footerSobreMi.textContent = texto.footerSobreMi;
  elementos.footerProyectos.textContent = texto.footerProyectos;
  elementos.footerFormacion.textContent = texto.footerFormacion;
  elementos.footerDescripcionFinal.innerHTML = texto.footerDescripcionFinal;

  elementos.btnCv.textContent = texto.btnCv;
  elementos.btnCv.href = texto.cvUrl;
  elementos.btnDescargarCv.textContent = texto.btnCv;
  elementos.btnDescargarCv.href = texto.cvUrl;
  elementos.contactoCv.textContent = texto.contactoCv;
  elementos.contactoCv.href = texto.cvUrl;
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

    githubLogo.style.filter = "brightness(0) invert(1)";
    linkedinLogo.style.filter = "brightness(0) invert(1)";
    mailLogo.style.filter = "brightness(0) invert(1)";
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
    LogoGitHub2.style.filter = "none";
    logoLinkedin.style.filter = "none";
    githubLogo.style.filter = "none";
    linkedinLogo.style.filter = "none";
    mailLogo.style.filter = "none";
  }
});

cambiarIdioma(idiomaActual);
