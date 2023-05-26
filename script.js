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
    }, 75);
  });
}
gradualAppearence().then(() => {
  boby();
});
const boby = () => {
  const buttonOpenModal = document.createElement("button");
  buttonOpenModal.innerText = "Открыть"
  buttonOpenModal.className = "panel-base__button"
  console.log(panelTitle.parentElement.appendChild(buttonOpenModal))
};
