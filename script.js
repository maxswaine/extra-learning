document.addEventListener("DOMContentLoaded", () => {
  const colorPicker = document.getElementById("favcolor");
  const gridItems = document.querySelectorAll(".grid-item");

  let selectedColor = colorPicker.value;

  colorPicker.addEventListener("input", (e) => {
    selectedColor = e.target.value;
  });

  gridItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.style.backgroundColor = selectedColor;
    });
  });
});
