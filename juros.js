document.write("<h2>Exercício 9</h2>");
  var v1 = Number(prompt("Digite o valor inicial:"));
  var taxa = Number(prompt("Digite a taxa de juro (em %):"));
  var tempo = Number(prompt("Digite o tempo (em anos)"));

  var resultado= v1*(1+taxa*tempo);
  document.write("O valor do montante é:" + resultado);