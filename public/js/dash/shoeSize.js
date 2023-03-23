(async () => {
  "use strict";

  // Function to fetch data for the scatter plot
  async function fetchData() {
    const response = await fetch("/data");
    const data = await response.json();
    return data.data;
  }

  // Prepare data for the scatter plot
  async function prepareScatterData() {
    const rawData = await fetchData();
    const scatterData = {
      male: { x: [], y: [] },
      female: { x: [], y: [] },
    };

    rawData.forEach((record) => {
      if (record.gender === "男") {
        scatterData.male.x.push(record.shoe_size_left);
        scatterData.male.y.push(record.shoe_size_right);
      } else if (record.gender === "女") {
        scatterData.female.x.push(record.shoe_size_left);
        scatterData.female.y.push(record.shoe_size_right);
      }
    });

    return scatterData;
  }

  // Render the scatter plot
  async function renderScatterPlot() {
    const data = await prepareScatterData();

    const scatterCtx = document.getElementById("scatterChart");
    new Chart(scatterCtx, {
      type: "scatter",
      data: {
        datasets: [
          {
            label: "男",
            data: data.male.x.map((x, i) => ({ x, y: data.male.y[i] })),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            pointBackgroundColor: "rgba(75, 192, 192, 1)",
          },
          {
            label: "女",
            data: data.female.x.map((x, i) => ({ x, y: data.female.y[i] })),
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            pointBackgroundColor: "rgba(255, 99, 132, 1)",
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "鞋码(左)",
              },
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "鞋码(右)",
              },
            },
          ],
        },
      },
    });
  }

  window.addEventListener("DOMContentLoaded", async () => {
    feather.replace({ "aria-hidden": "true" });

    // Render the scatter plot
    await renderScatterPlot();
  });
})();
