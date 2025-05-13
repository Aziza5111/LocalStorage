let text = document.querySelector(".text");
let btn = document.querySelector(".btn");
let massiv = [];

btn.addEventListener("click", () => {
  localStorage.setItem("name", text.value.toLowerCase());
  text.value = "";
  text.focus();
});

if (localStorage.getItem("name") == null) {
  text.value = "";
} else {
  text.value = localStorage.getItem("name");
}
