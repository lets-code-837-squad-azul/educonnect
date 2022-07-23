


function cadastrar(){
    
    

}

function entrar(){
    const cpf = document.getElementById("CPF").value;
    const senha = document.getElementById("Senha").value;
    
    if(!cpf || !senha){
        document.querySelector("#erro").innerHTML = "Não foi identificado a senha ou o CPF de algum usuário!"
    } else{
        document.querySelector("#erro").innerHTML ="";
    }

}