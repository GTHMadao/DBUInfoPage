document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleSidebar");

  // Temporarily disable transitions
  sidebar.style.transition = "none";

  // Restore sidebar state from localStorage
  const savedState = localStorage.getItem("sidebarOpen");
  if (savedState === "true") {
    sidebar.style.width = "250px";
  }

  // Force reflow to apply width without animation, then restore transition
  requestAnimationFrame(() => {
    sidebar.style.transition = "0.4s";
  });

  toggleBtn.addEventListener("click", () => {
    const isOpen = sidebar.style.width === "250px";

    sidebar.style.width = isOpen ? "0" : "250px";
    localStorage.setItem("sidebarOpen", !isOpen);
  });
});

const translations = {
  en: {
    welcome: "Welcome to the DBU Info Page",
    description: "Use the sidebar (top left) or buttons below to navigate to different tools and resources related to DBU.",
    nav1: "Max Rebirth Calculator",
    nav2: "Bosses & NPCs",
    nav3: "Maps (WIP)",
    nav4: "Forms & Masteries (WIP)",
    nav5: "Gamepasses",
    nav6: "Credits (WIP)"
  },
  es: {
    welcome: "Bienvenido a la página de información de DBU",
    description: "Usa la barra lateral (arriba a la izquierda) o los botones de abajo para navegar por diferentes herramientas y recursos relacionados con DBU.",
    nav1: "Calculadora de Renacimientos Máximos",
    nav2: "Jefes y NPCs",
    nav3: "Mapas (En progreso)",
    nav4: "Formas y Maestrías (En progreso)",
    nav5: "Pases de juego",
    nav6: "Créditos (En progreso)"
  }
};

function setLanguage(lang) {
  document.getElementById('welcome-text').textContent = translations[lang].welcome;
  document.getElementById('description-text').textContent = translations[lang].description;
  document.getElementById('nav1').textContent = translations[lang].nav1;
  document.getElementById('nav2').textContent = translations[lang].nav2;
  document.getElementById('nav3').textContent = translations[lang].nav3;
  document.getElementById('nav4').textContent = translations[lang].nav4;
  document.getElementById('nav5').textContent = translations[lang].nav5;
  document.getElementById('nav6').textContent = translations[lang].nav6;
}
