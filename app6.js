let text = document.querySelector(".text");
let btn = document.querySelector(".btn");
let namesList = document.querySelector(".names");

if (localStorage.getItem("lastLength") == null) {
  namesList.textContent = "hozircha yoq";
} else {
  namesList.textContent = localStorage.getItem("lastLength");
}

btn.addEventListener("click", () => {
  localStorage.setItem("lastLength", text.value.length);
  text.value = "";
  namesList.textContent = localStorage.getItem("lastLength");
});
