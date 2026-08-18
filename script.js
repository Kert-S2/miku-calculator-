let expressao = "";

function atualizarDisplay() {
  document.getElementById("display").value = expressao;
}

function adicionarNumero(numero) {
  expressao += numero;
  atualizarDisplay();
}
