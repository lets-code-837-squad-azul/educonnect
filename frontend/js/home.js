const ULR = "https://educonnect-lets-code-837.herokuapp.com/api";


function entrar(){
    const cpf = document.getElementById("CPF").value;
    const senha = document.getElementById("Senha").value;

    fetch(`${ULR}/login?cpf=${cpf}&senha=${senha}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })


    /* if(teste.indexOf(true)==-1){
      console.log("Falso");
        document.querySelector("#erro").innerHTML = "Não foi identificado a senha ou o CPF de algum usuário!"
    } else{
      console.log("Verdadeiro");
        document.querySelector("#erro").innerHTML ="";
    } */

}
