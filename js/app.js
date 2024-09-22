const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const btnClick = document.querySelector("#buttenClick");
const hellos = document.querySelector("#hellos span");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleLoginForm(event) {
  event.preventDefault();
  const wroteName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, wroteName);
  loginForm.classList.add(HIDDEN_CLASSNAME);

  greeting(wroteName);
}

function greeting(name) {
  hellos.classList.remove(HIDDEN_CLASSNAME);
  hellos.innerText = `Hello ${name}!`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.addEventListener("submit", handleLoginForm);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting(savedUsername);
}
