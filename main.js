setInterval(setClock, 1000);
const hour = document.querySelector('[data-hour]');
const minute = document.querySelector('[data-minute]');
const second = document.querySelector('[data-second]');

function setClock() {
  const nowDate = new Date();
  const sR = nowDate.getSeconds() / 60;
  const mR = (sR + nowDate.getMinutes()) / 60;
  const hR = (mR + nowDate.getHours()) / 60;
//   console.log(hR);
  setRotation(hour,hR);
  setRotation(minute,mR);
  setRotation(second,sR);
}

function setRotation(element, rR) {
  element.style.setProperty("--r", (rR * 360));
}
setClock();
