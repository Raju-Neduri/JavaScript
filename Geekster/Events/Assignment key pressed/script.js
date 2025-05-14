document.addEventListener("keydown", (event) => {
  const key = event.key === " " ? "Space" : event.key;
  const code = event.code;
  const keyCode = event.keyCode;

  document.getElementById("key").textContent = key;
  document.getElementById("code").textContent = code;
  document.getElementById("keycode").textContent = keyCode;
});
