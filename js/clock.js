const clock = document.querySelector("#clock");
const date = document.querySelector("#date");

let today = new Date();

let year = today.getFullYear();
let month = today.getMonth() + 1;
let dateD = today.getDate();
let day = today.getDay();

let arrDay = ["일", "월", "화", "수", "목", "금", "토"];

date.innerText = `${year}년 ${month}월 ${dateD}일 ${arrDay[day]}요일`;

function clockJs() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

clockJs();
setInterval(clockJs, 1000);
