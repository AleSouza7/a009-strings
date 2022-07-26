const frase =("Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS\", mas não deixe o gato sair.")

let novafrase=frase.replaceAll("verde","rosa","azul","laranja")
novafrase=novafrase.replace("azul","laranja")
novafrase=novafrase.replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR")

console.log(novafrase)