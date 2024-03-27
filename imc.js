document.write("<h2>Exercício 8</h2>");
  var peso = Number(prompt("Digite o peso:"));
  var altura = Number(prompt("Digite a altura:"));

  var imc= peso/(altura*altura);
  document.write("O valor do IMC é = " + imc);