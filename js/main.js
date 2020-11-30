const button = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const para = ul.previousElementSibling;

let i = [];
let flag = true;
let count = 0;
let parent;
button.addEventListener("click", (e) => {
  e.preventDefault();
  createTodo(input.value);
});

function createTodo(todo) {
  if (todo == "" || todo == " ") return;
  const li = document.createElement("li");
  li.className = "item";
  const span = document.createElement("span");
  const text = document.createTextNode(todo);
  span.appendChild(text);
  const cross = document.createElement("i");
  cross.className = "fa fa-remove";
  li.appendChild(span);
  li.appendChild(cross);
  ul.appendChild(li);
  input.value = "";
  i = document.querySelectorAll("i");
  call();
  if (flag) {
    para.textContent = "Todos";
    flag = false;
  }
}
function call() {
  i.forEach((x) => {
    x.addEventListener("click", (e) => {
      removeTodo(e.target.parentNode);
    });
  });
}

function removeTodo(list) {
  count = list.parentNode.children.length;
  if (count <= 1) para.textContent = "No Todos To Show";
  list.remove();
}
