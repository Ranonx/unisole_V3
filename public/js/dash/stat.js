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

  const totalUsersStatsElement = document.querySelector(
    "#total-users-stats h2"
  );
  const genderStatsElement = document.querySelector("#total-users-stats p");

  totalUsersStatsElement.textContent = `已扫描${totalUsers}人`;
  genderStatsElement.textContent = `已扫描用户中,有${maleUsers}名男生, 有${femaleUsers}名女生`;
}

window.addEventListener("DOMContentLoaded", updateStats);
