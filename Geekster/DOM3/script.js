let createElement = document.createElement("div");
createElement.style.height = "100px";
createElement.style.width = "100px";
createElement.style.backgroundColor = "blue";
createElement.style.color = "black";
createElement.style.textAlign = "center";
createElement.style.fontSize = "30px";
createElement.innerText = "this is new text added ";

document.body.appendChild(createElement); // Now this is valid
