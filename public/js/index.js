var frase = $(".frase");
var numeroPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase").text();

tamanhoFrase.text(numeroPalavras);