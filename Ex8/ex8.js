function calcular() {
  let tabela = document.getElementById("tab");
  let valor = document.getElementById("reais").value;
  let cedu = [
    200.0, 100.0, 50.0, 20.0, 10.0, 5.0, 2.0, 1.0, 0.5, 0.25, 0.1, 0.05, 0.01,
  ];
  console.log("NOTAS:");
  tabela.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    let aux = parseInt(valor / cedu[i]);
    tabela.innerHTML += `<li>${aux} nota(s) de R$ ${cedu[i].toFixed(2)}</li>`;
    valor = valor % cedu[i];
  }
  console.log("MOEDAS:");
  for (let j = 6; j < cedu.length; j++) {
    let aux = parseInt(valor / cedu[i]);
    tabela.innerHTML += `<li>${aux} moeda(s) de R$ ${cedu[j].toFixed(2)}</li>`;
    valor = (valor % cedu[i]) + 0.00001;
  }
}
