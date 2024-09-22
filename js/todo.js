const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

let ListDo = [];

const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(ListDo));
}

function deleteToDo(event) {
  const liDel = event.target.parentElement;
  liDel.remove();
  ListDo = ListDo.filter((list) => list.id !== parseInt(liDel.id));
  saveToDos();
}

function paintToDo(todoList) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  span.innerText = todoList.text;
  li.id = todoList.id;
  li.appendChild(button);
  button.innerText = "🗑️";
  toDoList.appendChild(li);

  button.addEventListener("click", deleteToDo);
}

function handleToDolist(event) {
  event.preventDefault();
  const toDoValue = toDoInput.value;
  toDoInput.value = "";
  const toDoObj = {
    text: toDoValue,
    id: Date.now(),
  };
  ListDo.push(toDoObj);
  paintToDo(toDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDolist);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  ListDo = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
