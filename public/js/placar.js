function inserePlacar() {

    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Flávio";
    var numeroPalavras = $("#contador-palavras").text();
    // var botaoRemover = "<a href='#'><i class='small material-icons'> delete</i></a>";

    var linha = novaLinha(usuario, numeroPalavras);

    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.prepend(linha);
}

function novaLinha(usuario) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(numeroPalavras);
    var colunaRemover = $("<td>");
    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);
    colunaRemover.append(link);
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}
function removeLinha() {
    event.preventDefault();
    $(this).parent().parent().remove();
}