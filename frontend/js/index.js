
const ULR = "https://educonnect-lets-code-837.herokuapp.com/api";


function entrar(){
    const cpf = document.getElementById("CPF").value;
    const senha = document.getElementById("Senha").value;

    fetch(`${ULR}/login?cpf=${cpf}&senha=${senha}`)
    .then(response => response.json())
    .then((data )=> {

      sessionStorage.setItem('aluno', data.eh_aluno)
      sessionStorage.setItem('monitor', data.eh_monitor)




      if (data.eh_aluno || data.eh_monitor) {
        sessionStorage.setItem('nome', data.aluno.nome)
        location.replace("../pages/login-entrar.html")
      } else {
        document.querySelector("#mensagem").innerHTML = data.message;
      }
    })









}

