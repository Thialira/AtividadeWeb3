let nome = window.prompt("Qual é seu nome?");
while (nome == "") {
  nome = window.prompt("Informe um nome valido!");
}
window.alert(
  "Olá, " +
    nome +
    " é um grande prazer te conhecer, vem fazer parte do nosso time!!"
);
