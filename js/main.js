const button = document.querySelector("button");
const input = document.querySelector("input");
const body = document.querySelector("body");
const content = document.querySelector("#content");
const ul = document.querySelector("ul");
let i;
let flag;
let count = 0;
let tasks;
(function () {
  if (
    localStorage.getItem("tasks") === null ||
    JSON.parse(localStorage.getItem("tasks")).length === 0
  ) {
    tasks = [];
    flag = false;
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    for (let i = 0; i < tasks.length; i++) {
      createTodo(tasks[i], 2);
    }
    console.log(tasks);
    flag = true;
    content.textContent = "Todos";
  }
})();
button.addEventListener("click", (e) => {
  e.preventDefault();
  createTodo(input.value, 1);
});

function createTodo(todo, loc) {
  flag = true;
  if (todo == "" || todo == " ") return;
  if (loc === 1) {
    tasks.push(todo);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  console.log(tasks);
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
  const text = list.childNodes[0].textContent;
  let index = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === text) {
      index = i;
      break;
    }
  }
  // console.log(index);
  tasks.splice(index, 1);
  // console.log(tasks);
  if (list.parentElement.children.length === 1) {
    content.textContent = "No Todos to Show";
    flag = true;
  }
  list.remove();
  localStorage.setItem("tasks", JSON.stringify(tasks));
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
