var conta=1;

function novaLinha(){
    conta++;

    var parte1 = "<tr><td>Teste " + conta + "</td>";
    var parte2 = "<td  id='tabela_linha_" + conta + "'><input type='button' ";
    var parte3 = "value='Remover' onClick=\"javascript:removeLinha('tabela_linha_"+conta+"')\"></input>";

    document.getElementById("tabela_produto").innerHTML += parte1 + parte2 + parte3;
    document.getElementById("tabela_produto").innerHTML += "</td></tr>";
}

function removeLinha(id){

    teste = document.getElementById(id);
    teste.parentNode.parentNode.removeChild(teste.parentNode);
}