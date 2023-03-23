// js/dash/stat.js
async function fetchStats() {
  const response = await fetch("/data");
  const { data } = await response.json();

  let totalUsers = data.length;
  let maleUsers = 0;
  let femaleUsers = 0;

  data.forEach((row) => {
    if (row.gender === "男") {
      maleUsers++;
    } else if (row.gender === "女") {
      femaleUsers++;
    }
  });

  return { totalUsers, maleUsers, femaleUsers };
}

async function updateStats() {
  const { totalUsers, maleUsers, femaleUsers } = await fetchStats();

  const totalUsersElement = document.getElementById("total-users");
  const genderStatsElement = document.getElementById("gender-stats");

  totalUsersElement.textContent = `Total Users: ${totalUsers}`;
  genderStatsElement.textContent = `Males: ${maleUsers}, Females: ${femaleUsers}`;
}

window.addEventListener("DOMContentLoaded", updateStats);
