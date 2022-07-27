let banco_de_dados_usuario = [{"cpf":123, "senha":"dsa"}, {"cpf":234, "senha":"fdfsdf"}, {"cpf":345, "senha":"fsdfdsfdsf"}]

function entrar(){
    const cpf = document.getElementById("CPF").value;
    const senha = document.getElementById("Senha").value;
    console.log(cpf)
    const teste = banco_de_dados_usuario.map((valor) => valor.cpf == cpf)
    const teste2 = teste.indexOf(true)


    if(teste2==-1){
      console.log("Falso");
        /* document.querySelector("#erro").innerHTML = "Não foi identificado a senha ou o CPF de algum usuário!" */
    } else{
      console.log("Verdadeiro");
        /* document.querySelector("#erro").innerHTML =""; */
    }

}