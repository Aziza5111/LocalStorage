// let fName = document.querySelector(".fName");
// let Btn = document.querySelector(".btn");
// fName.value = localStorage.getItem("submit");

// Btn.addEventListener("click", () => {
//   localStorage.setItem("username", fName.value);
// });

let counter = document.querySelector("count");
let btn = document.querySelector("btn");

let count = parseInt(localStorage.getItem("count"));
counter.innerText = count;

btn.addEventListener("click", () => {
  count++;
  counter.innerText = count;
  localStorage.setItem("count", count);
});
