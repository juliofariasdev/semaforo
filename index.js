let id
function acendeGreen(limpa) {
    limpa?clearInterval(id):false
  let desligado = document.getElementsByClassName("green-desligado")[0];
  if (desligado) {
    let lampada = document.getElementsByClassName("green-desligado")[0];
    lampada.className = lampada.className.replace(
      "green-desligado",
      "green-ligado"
    );
    document.getElementsByClassName("red-ligado")[0] ? acendeRed() : false;
    document.getElementsByClassName("yellow-ligado")[0]
      ? acendeYellow()
      : false;
  } else {
    let lampada = document.getElementsByClassName("green-ligado")[0];
    lampada.className = lampada.className.replace(
      "green-ligado",
      "green-desligado"
    );
  }
}
function acendeRed(limpa) {
    limpa?clearInterval(id):false
  let desligado = document.getElementsByClassName("red-desligado")[0];
  if (desligado) {
    let lampada = document.getElementsByClassName("red-desligado")[0];
    lampada.className = lampada.className.replace(
      "red-desligado",
      "red-ligado"
    );
    document.getElementsByClassName("green-ligado")[0] ? acendeGreen() : false;
    document.getElementsByClassName("yellow-ligado")[0]
      ? acendeYellow()
      : false;
  } else {
    let lampada = document.getElementsByClassName("red-ligado")[0];
    lampada.className = lampada.className.replace(
      "red-ligado",
      "red-desligado"
    );
  }
}
function acendeYellow(limpa) {
    limpa?clearInterval(id):false
  let desligado = document.getElementsByClassName("yellow-desligado")[0];

  if (desligado) {
    let lampada = document.getElementsByClassName("yellow-desligado")[0];
    lampada.className = lampada.className.replace(
      "yellow-desligado",
      "yellow-ligado"
    );
    document.getElementsByClassName("red-ligado")[0] ? acendeRed() : false;
    document.getElementsByClassName("green-ligado")[0] ? acendeGreen() : false;
  } else {
    let lampada = document.getElementsByClassName("yellow-ligado")[0];
    lampada.className = lampada.className.replace(
      "yellow-ligado",
      "yellow-desligado"
    );
  }
}
function automatico() {
  if (document.getElementsByClassName("red-ligado")[0]) {
    acendeYellow();
  } else if (document.getElementsByClassName("yellow-ligado")[0]) {
    acendeGreen();
  } else if (document.getElementsByClassName("green-ligado")) {
    acendeRed();
  } else {
    acendeRed();
  }
}

function automatiza(){
    clearInterval(id)
    id = setInterval(automatico,1000)
    
}
window.onload(automatiza())