function calcular() {
  const valor1 = parseInt(document.getElementById("num1").value);
  const valor2 = parseInt(document.getElementById("num2").value);
  const lista = document.getElementById("lista");

  const soma = valor1 + valor2;
  const subtracao = valor1 - valor2;
  const multiplicacao = valor1 * valor2;
  const divisao = valor1 / valor2;
  const resto = valor1 % valor2;
  const potencia = valor1 ** valor2;

  lista.innerHTML = "";
  lista.innerHTML += `<li>Soma de ${valor1} + ${valor2} = ${soma}</li>`;
  lista.innerHTML += `<li>Subtração de ${valor1} - ${valor2} = ${subtracao}</li>`;
  lista.innerHTML += `<li>Multiplicacao de ${valor1} * ${valor2} = ${multiplicacao}</li>`;
  lista.innerHTML += `<li>Divisao de ${valor1} / ${valor2} = ${divisao}</li>`;
  lista.innerHTML += `<li>Resto de ${valor1} % ${valor2} = ${resto}</li>`;
  lista.innerHTML += `<li>Potencia de ${valor1} ** ${valor2} = ${potencia}</li>`;
}
