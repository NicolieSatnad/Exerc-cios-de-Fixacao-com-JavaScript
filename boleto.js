document.write("<h2>Exercício 3</h2>");
  var valor = prompt("Insira o valor da prestação:");
  var taxa = prompt("Insira o valor da taxa de juros:");
  var tempo = prompt("Insira os dias de atraso:");
  resultado= Number(valor)+Number(valor*(taxa*taxa)/100);
  document.write("O valor da parcela é: R$" + resultado);
