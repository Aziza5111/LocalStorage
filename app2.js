let counter = document.querySelector(".count");
let btn = document.querySelector(".btn");
let i;

if (localStorage.getItem("count") == null) {
  i = 0;
  localStorage.setItem("count", i);
} else {
  i = Number(localStorage.getItem("count"));
}
counter.textContent = i;

btn.addEventListener("click", () => {
  i = i + 1;
  counter.textContent = i;
  localStorage.setItem("count", i);
});
