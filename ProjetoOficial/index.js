var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var resultadoElemento = document.getElementById("resultado");

  if (chute == numeroSecreto) {
    resultadoElemento.innerHTML = "Você acertou";
  } else if (chute > 10 || chute < 0) {
    resultadoElemento.innerHTML = "Você deve digitar um numero de 1 à 10!";
  } else {
    resultadoElemento.innerHTML =
      "Você errou. O número correto era " + numeroSecreto + ".";
  }
}
