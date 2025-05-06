document.getElementsByClassName("heading2")[0].style.color = "red";
document.getElementsByName("heading3")[0].style.color = "blue";
const items = document.querySelectorAll(".heading2");
items.forEach((item) => (item.style.color = "green"));
