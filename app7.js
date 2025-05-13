let text = document.querySelector(".text");
let btn = document.querySelector(".btn");
let namesList = document.querySelector(".names");
let delbtn = document.querySelector(".delete");
let massiv = [];

btn.addEventListener("click", () => {
  massiv.push(text.value);

  text.value = "";

  localStorage.setItem("name", JSON.stringify(massiv));
  let newMassiv = JSON.parse(localStorage.getItem("name"));
  namesList.textContent = "";
  newMassiv.forEach((item) => {
    let list = document.createElement("li");
    list.textContent = item;
    namesList.appendChild(list);
  });
});

delbtn.addEventListener("click", () => {
  if (localStorage.getItem("name" == null)) {
    console.log("no");
  } else {
    namesList.textContent = "";

    let newMassiv = JSON.parse(localStorage.getItem("name"));
    newMassiv.pop();
    localStorage.setItem("name", JSON.stringify(newMassiv));
    newMassiv.forEach((item) => {
      let list = document.createElement("li");
      list.textContent = item;
      namesList.appendChild(list);
    });
  }
});
