const panel = document.querySelector(".panel-base__text");
const panelText =
  "Привет! Это модальное окно!<new>Возможность вызвать его скоро появится :)";

const gradualAppearence = () => {
  // Массива фраз из предложения по разделителю <new>
  const phrases = panelText.split("<new>");
  // Создание <p> для каждой фразы из массива
  phrases.forEach(() => {
    const p = document.createElement("p");
    panel.append(p);
  });

  let i = 0, currentText = 0;
  const panelStrings = panel.querySelectorAll("p");
  // Промис для появления кнопки строго после напечатанного текста
  return new Promise((resolve) => {
    const printedText = setInterval(() => {
      // Назначение класса для эффекта "печатающегося текста"
      if (!panelStrings[currentText].classList.contains("typing"))
        panelStrings[currentText].classList.add("typing");
      // Добавление по 1 символу
      panelStrings[currentText].innerHTML += phrases[currentText][i];
      i++;
      // Если строка полностью напечатана - убираем эффект
      if (i === phrases[currentText].length) {
        panelStrings[currentText].removeAttribute("class");
        currentText++;
        i = 0;
        /* Если все фразы из массива добавлены в документ, то
          то отменяем установленный интервал printedText. */
        if (currentText === phrases.length) {
          clearInterval(printedText);
          resolve();
        }
      }
      // 75
    }, 100);
  });
};
/* Вызов функции "печатающегося текста" и ожидание результата выполнения. 
  После выполнения добавляется кнопка открытия модального окна. */
gradualAppearence().then(() => {
  const openModal = document.createElement("button");
  openModal.dataset.func = "open";
  openModal.innerText = "Открыть";
  openModal.className = "panel-base__button";
  panel.parentElement.appendChild(openModal);
});

const closeModal = (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("open");
    document.removeEventListener("keydown", closeModal);
  }
};

const pageClickHandling = (e) => {
  const target = e.target;
  if (target.dataset.func === "open") {
    modal.classList.add("open");
    document.addEventListener("keydown", (e) => closeModal(e));
  }
};
document.body.addEventListener("click", (e) => pageClickHandling(e));

// Modal Window
const modal = document.querySelector(".modal");
const modalClickHandling = (e) => {
  const target = e.target;
  // Если клик вне модального (заблюренная область) или по крестику
  if (target.classList.contains("modal") || target.dataset.func === "close") {
    modal.classList.remove("open");
  }
  console.log(target);
  if (target.dataset.func === "send") {
    console.log("Continue...");
  }
  e.preventDefault();
};
modal.addEventListener("click", (e) => modalClickHandling(e));