const panelTitle = document.querySelector(".panel-base__text");
const panelTitleText =
  "Привет! Это модальное окно!<new>Возможность вызвать его скоро появится :)";
const splitted = panelTitleText.split("<new>");

splitted.forEach(() => {
  const p = document.createElement("p");
  panelTitle.append(p);
});

const paras = panelTitle.querySelectorAll("p");
let i = 0;
let currentText = 0;

function gradualAppearence() {
  return new Promise((resolve) => {
    const intervalId = setInterval(() => {
      paras[currentText].innerHTML += splitted[currentText][i];
      i++;

      if (i === splitted[currentText].length) {
        currentText++;
        i = 0;

        if (currentText === splitted.length) {
          clearInterval(intervalId);
          resolve();
        }
      }
      // 75
    }, 0);
  });
}
gradualAppearence().then(() => {
  boby();
});
const boby = () => {
  const buttonOpenModal = document.createElement("button");
  buttonOpenModal.dataset.func = "open";
  buttonOpenModal.innerText = "Открыть";
  buttonOpenModal.className = "panel-base__button";
  panelTitle.parentElement.appendChild(buttonOpenModal);
};

const closeModal = (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("open");
    document.removeEventListener("keydown", closeModal);
  }
}

const pageClickHandling = (e) => {
  const target = e.target;
  if (target.dataset.func === "open") {
    modal.classList.add("open");
    document.addEventListener("keydown", (e) => closeModal(e));
  }
};
document.body.addEventListener("click", (e) => pageClickHandling(e));

// Modal Window
const modalClickHandling = (e) => {
  const target = e.target;
  if (target.classList.contains("modal") || target.dataset.func === "close") {
    modal.classList.remove("open");
  }
  console.log(target);
  if (target.dataset.func === "send") {
    console.log("Continue...")
  }
  e.preventDefault();
};
const modal = document.querySelector(".modal");
modal.addEventListener("click", (e) => modalClickHandling(e));