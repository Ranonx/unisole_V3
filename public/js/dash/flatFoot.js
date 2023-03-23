async function getFlatFootData() {
  const response = await fetch("/data");
  const { data } = await response.json();

  let totalFlatFoot = 0;
  let mild = 0;
  let moderate = 0;
  let serious = 0;

  data.forEach((row) => {
    const avgArchRatio =
      (parseFloat(row.arch_ratio_left) + parseFloat(row.arch_ratio_right)) / 2;

    if (avgArchRatio > 0.26) {
      totalFlatFoot++;

      if (avgArchRatio <= 0.28) {
        mild++;
      } else if (avgArchRatio <= 0.3) {
        moderate++;
      } else {
        serious++;
      }
    }
  });

  return { totalFlatFoot, mild, moderate, serious };
}

async function displayFlatFootStats() {
  const stats = await getFlatFootData();

  const h2 = document.querySelector("#flatfoot-stats h2");
  const p = document.querySelector("#flatfoot-stats p");

  h2.textContent = `有${stats.totalFlatFoot}名用户有扁平足`;
  p.textContent = `扁平足人士当中,轻度有${stats.mild}人, 中度有${stats.moderate}人, 重度有${stats.serious}人`;
}

window.addEventListener("DOMContentLoaded", displayFlatFootStats);
