// table.js
document.addEventListener("DOMContentLoaded", () => {
  updateTable();
});

async function updateTable() {
  // Fetch data from the /data route
  const response = await fetch("/data");
  const { data } = await response.json();

  feather.replace({ "aria-hidden": "true" });

  const dataTable = document.getElementById("data-table");
  const tbody = dataTable.querySelector("tbody");

  data.forEach((row) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${row.id}</td>
        <td>${row.id_num}</td>
        <td>${row.name}</td>
        <td>${row.gender}</td>
        <td>${row.shoe_size_left}</td>
        <td>${row.arch_length_left}</td>
        <td>${row.arch_width_left}</td>
        <td>${row.heel_width_left}</td>
        <td>${row.foot_length_left}</td>
        <td>${row.foot_width_left}</td>
        <td>${row.ball_girth_left}</td>
        <td>${row.arch_index_left}</td>
        <td>${row.arch_ratio_left}</td>
        <td>${row.shoe_size_right}</td>
        <td>${row.arch_length_right}</td>
        <td>${row.arch_width_right}</td>
        <td>${row.heel_width_right}</td>
        <td>${row.foot_length_right}</td>
        <td>${row.foot_width_right}</td>
        <td>${row.ball_girth_right}</td>
        <td>${row.arch_index_right}</td>
        <td>${row.arch_ratio_right}</td>
      `;

    tbody.appendChild(tr);
  });
}
