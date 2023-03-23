fetch("/navbar")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-container").innerHTML = data;
    // Set the active state of the current page link
    const currentPath = window.location.pathname;
    const navbarLinks = document.querySelectorAll(".nav-link");
    navbarLinks.forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  })
  .catch((error) => console.error(error));

function loadDefaultPage() {
  fetch("/dashboard")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("dashboard").innerHTML = data;
    })
    .catch((error) => console.error(error));
}

function loadTable() {
  fetch("/table")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("table").innerHTML = data;
    })
    .catch((error) => console.error(error));
}

document.addEventListener("DOMContentLoaded", () => {
  loadDefaultPage();
  loadTable();
});
