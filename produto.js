document.write("<h2>Exercício 6</h2>");
  var qtd = Number(prompt("Digite a quantidade do produto:"));
  var preco = Number(prompt("Qual o preço do produto?"));
  var st,d,result;
  
  st=(qtd*preco);
  d=((st*10)/100);
  result= Number(st-d);
  document.write("Valor a pagar: " + result);