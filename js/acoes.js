let hunger = 50;
let sleepiness = 50;
let fun = 50;

function updateDisplay() {
  document.getElementById('hunger').innerText = hunger;
  document.getElementById('sleep').innerText = sleepiness;
  document.getElementById('fun').innerText = fun;
  
  let img = document.getElementById('img-gato');
  
  if (hunger <= 50) {
    img.src = "/css/imagens/estados/gato-fome.png";
  } else if (sleepiness <= 60) {
    img.src = "/css/imagens/estados/gato-cansado.png";
  } else if (fun <= 30) {
    img.src = "/css/imagens/estados/gato-bravo.png";
  } else {
    img.src = "/css/imagens/estados/gato-neutro.png";
  }
}

function feed() {
  if (hunger < 90) {
    hunger += 10;
  } else {
    hunger = 100;
  }
  updateDisplay();
}

function sleep() {
  if (sleepiness < 90) {
    sleepiness += 10;
  } else {
    sleepiness = 100;
  }
  updateDisplay();
}

function play() {
  if (fun < 90) {
    fun += 10;
  } else {
    fun = 100;
  }
  updateDisplay();
}

setInterval(() => {
  if (hunger > 0) {
    hunger -= 5;
  }
  if (sleepiness > 0) {
    sleepiness -= 5;
  }
  if (fun > 0) {
    fun -= 5;
  }
  updateDisplay();
}, 5000);

document.getElementById('feedBtn').addEventListener('click', feed);
document.getElementById('sleepBtn').addEventListener('click', sleep);
document.getElementById('playBtn').addEventListener('click', play);
