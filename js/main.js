const button = document.querySelector("button");
const input = document.querySelector("input");
const body = document.querySelector("body");
const content = document.querySelector("#content");
const ul = document.querySelector("ul");
let i;
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
  console.log(flag);
  if (flag) {
    content.textContent = "Todos";
    flag = false;
  }
}
body.addEventListener("click", (e) => {
  if (e.target.className === "fa fa-remove") removeTodo(e.target.parentNode);
});

function removeTodo(list) {
  console.log(list);
  console.log(list.parentElement.children, list.parentElement.children.length);
  if (list.parentElement.children.length === 1) {
    content.textContent = "No Todos to Show";
    flag = true;
  }
  list.remove();
}
//local storage

// localStorage.setItem("name", "SAn");

// //session storage

// sessionStorage.setItem("name", "SANTHOSH");

// //remove from storage
// // localStorage.removeItem("name")

// //get from storage
// const name = localStorage.getItem("name");
// console.log(name);

// //To clear all localStorage data

// // localStorage.clear();

// const a = "[1, 2, 3, 4]";

// // console.log(typeof JSON.stringify(a));
// console.log(typeof JSON.parse(a), JSON.parse(a));
