// js/navbar.js
async function loadNavbar() {
  const response = await fetch("navbar.html");
  const navbarHtml = await response.text();
  document.getElementById("navbar-container").innerHTML = navbarHtml;
}

async function loadDashboard() {
  const response = await fetch("dashboard.html");
  const dashboardHtml = await response.text();
  document.getElementById("dashboard").innerHTML = dashboardHtml;
  await loadStats();
}

async function loadStats() {
  const response = await fetch("stat.html");
  const statHtml = await response.text();
  document.getElementById("stats").innerHTML = statHtml;
}

window.addEventListener("DOMContentLoaded", async () => {
  await loadNavbar();
  await loadDashboard();
  await loadTable(); // Add this line to load the table on the default page

  const navbarLinks = document.querySelectorAll("#sidebar-menu a");
  navbarLinks.forEach((link) => {
    link.addEventListener("click", async (e) => {
      e.preventDefault();
      navbarLinks.forEach((link) => {
        link.parentElement.classList.remove("active");
      });
      e.target.parentElement.classList.add("active");

      if (e.target.id === "dashboard-link") {
        await loadDashboard();
        await loadTable(); // Add this line to load the table when clicking on the dashboard link
      } else if (e.target.id === "table-link") {
        loadTable();
      }
    });
  });
});
