const panelTitle = document.querySelector(".panel-base__title");
const panelTitleText = "Привет! Это модальное окно! Оно появится на следующем листе.";
const speed = 150;
let i = 0;

const typeWriter = () => {
  const cursor = panelTitle.nextElementSibling;
  cursor.classList.add("typing");
  if (i < panelTitleText.length) {
    panelTitle.innerHTML += panelTitleText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else cursor.classList.remove("typing");
};

typeWriter();