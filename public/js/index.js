var tempoInicial = $("#tempo-digitacao").text();
var frase = $(".frase").text();
var numeroPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numeroPalavras);

var campo = $(".campo-digitacao");
campo.on("input", function () {
    var conteudo = campo.val();

    var qtdePalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdePalavras);

    var qtdeCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdeCaracteres);
});

var tempoRestante = $("#tempo-digitacao").text();
campo.one("focus", function () {
    var cronometroID = setInterval(function () {
        tempoRestante--;
        $("#tempo-digitacao").text(tempoRestante);
        if (tempoRestante < 1) {
            campo.attr("disabled", true);
            clearInterval(cronometroID);
        }

    }, 1000);
});

$("botao-reiniciar").click(function () {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
});
