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
