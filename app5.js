let text = document.querySelector(".text");
let btn = document.querySelector(".btn");
let namesList = document.querySelector(".names");
let massiv = [];

btn.addEventListener("click", () => {
  massiv.push(text.value);
  localStorage.setItem("name", JSON.stringify(massiv));

  text.value = "";
  text.focus();
  namesList.textContent = "";

  let newMassiv = JSON.parse(localStorage.getItem("name"));

  namesList.textContent = newMassiv.join(", ");
});
