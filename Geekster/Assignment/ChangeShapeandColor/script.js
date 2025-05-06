const circle = document.getElementById("circle");
const inner = document.querySelector(".inner");
const changeColorBtn = document.querySelector("#change-color button");
const changeShapeBtn = document.querySelector("#change-shape button");

const info = document.createElement("div");
info.id = "info";
document.getElementById("container").appendChild(info);

const colors = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "pink",
  "seagreen",
  "gold",
  "tomato",
  "skyblue",
  "teal",
  "violet",
  "coral",
  "dodgerblue",
  "limegreen",
  "hotpink",
  "indigo",
  "slateblue",
  "lightseagreen",
];

const shapes = [
  { name: "Circle", borderRadius: "50%", width: "120px", height: "120px" },
  { name: "Square", borderRadius: "0%", width: "120px", height: "120px" },
  {
    name: "Rounded Square",
    borderRadius: "15px",
    width: "120px",
    height: "120px",
  },
  { name: "Capsule", borderRadius: "50px", width: "180px", height: "80px" },
  {
    name: "Ellipse",
    borderRadius: "50% / 30%",
    width: "160px",
    height: "100px",
  },
];

let shapeIndex = 0;
// Set initial color from computed style
let currentColor = getComputedStyle(circle).backgroundColor;

function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function updateInfo() {
  const shapeName = shapes[shapeIndex].name;
  const colorFormatted = capitalizeWords(currentColor);
  info.innerHTML = `<strong>Color:</strong> ${colorFormatted} <br><strong>Shape:</strong> ${shapeName}`;
}

changeColorBtn.addEventListener("click", () => {
  currentColor = colors[Math.floor(Math.random() * colors.length)];
  circle.style.backgroundColor = currentColor;
  updateInfo();
});

changeShapeBtn.addEventListener("click", () => {
  shapeIndex = (shapeIndex + 1) % shapes.length;
  const shape = shapes[shapeIndex];
  Object.assign(inner.style, shape);
  updateInfo();
});

// Initial setup
updateInfo();
