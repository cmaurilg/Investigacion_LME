function calcularIMC() {
  // Obtener los valores de peso y altura
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;

  // Calcular el IMC
  let imc = peso / (altura * altura);

  // Mostrar el resultado
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "Su IMC es: " + imc.toFixed(2);

  // Interpretar el IMC
  if (peso != "" && altura != "") {
      if (imc < 18.5) {
        resultado.innerHTML += "<br><br>Insuficiencia Ponderal";
      } else if (imc >= 18.5 && imc < 24.9) {
        resultado.innerHTML += "<br><br>Peso Normal";
      } else if (imc >= 25 && imc < 29.9) {
        resultado.innerHTML += "<br><br>Sobrepeso";
      } else if (imc >= 30 && imc < 34.9) {
        resultado.innerHTML += "<br><br>Obesidad I";
      } else if (imc >= 35 && imc < 39.9) {
        resultado.innerHTML += "<br><br>Obesidad II";
      } else if (imc >= 40) {
        resultado.innerHTML += "<br><br>Obesidad III";
      }
  }else {
    alert("Advertencia:  Coloque los datos faltantes para realizar el calculo");
    resultado.innerHTML += " Complete los campos requeridos";
  }
}
