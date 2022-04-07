function verificar() {
  nome = document.getElementById("nome").value;
  sbnome = document.getElementById("sobrenome").value;

  alert(`Olá ${nome} ${sbnome} muito prazer em lhe conhecer!!`);
}

function clicar() {
  document.getElementById("nome").value = "";
  document.getElementById("sobrenome").value = "";
}
