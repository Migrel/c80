
//esse comando cria uma lista com os convidados
var convidados = []
function adicionar()
{
    //o valor que a pessoa digitou é guardado na variável convidado 
  var convidado = document.getElementById("nome1").value;
    //depois, disso, ele é adicionado na matriz
convidados.push(convidado)
    //e então, a matriz é organizada por ordem alfabética
   convidados.sort()

    //esse comando limpa a caixa de texto
   document.getElementById("nome1").value = '';
    //esses comandos exibe a lista de nomes
    document.getElementById("mostrarNomes").innerHTML = convidados
    document.getElementById("mostrarNomes").style.display = "block";
}

function pesquisar(){
    //esse comando guarda na variável o que a pessoa digitou para pesquisar
    var consulta = document.getElementById("consulta").value;
    //a variável quantidade guarda o número de vezes que o nome foi encontrado
    var quantidade = 0
    
    for(var i = 0; i < convidados.length; i++){
        //esse comando compara o que a pessoa digitou com o nome da lista
        if(consulta==convidados[i]){
            //quando são iguais, a quantidade aumenta
            quantidade++;

    //esse comando exibe a quantidade
}
}
document.getElementById("resultado").innerHTML = "Nome encontrado"+ quantidade + "vez(ez)"
}