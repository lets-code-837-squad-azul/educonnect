let banco_de_dados_usuario = [{"cpf":111, "senha":"aaa"},
                              {"cpf":222, "senha":"bbb"},
                              {"cpf":333, "senha":"ccc"}]

function entrar(){
    const cpf = document.getElementById("CPF").value;
    const senha = document.getElementById("Senha").value;

    const teste = banco_de_dados_usuario.map((valor) => valor.cpf == cpf && valor.senha == senha)

    
    if(teste.indexOf(true)==-1){
      console.log("Falso");
        document.querySelector("#erro").innerHTML = "Não foi identificado a senha ou o CPF de algum usuário!"
    } else{
      console.log("Verdadeiro");
        document.querySelector("#erro").innerHTML ="";
    }

}
