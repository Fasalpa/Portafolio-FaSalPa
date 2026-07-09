const cambiarModo = document.getElementById("cambiarModo");
const logoLinkedin = document.getElementById("logoLinkedin");
const logoGithub = document.getElementById("logoGithub");

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
