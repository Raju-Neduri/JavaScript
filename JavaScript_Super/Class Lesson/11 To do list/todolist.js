const todoList = [];

function rendertodolist() {
  let todoisHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoisHTML += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todoisHTML;
}

function addTodo() {
  let inputElement = document.querySelector(".js-name-input");
  let name = inputElement.value;
  console.log(name);
  todoList.push(name);
  console.log(todoList);
  inputElement.value = "";
  rendertodolist();
}

//enter button
function enterbutton(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}
