
const ULR = "https://educonnect-lets-code-837.herokuapp.com/api";


function entrar(){
    const cpf = document.getElementById("CPF").value;
    const senha = document.getElementById("Senha").value;

    fetch(`${ULR}/login?cpf=${cpf}&senha=${senha}`)
    .then(response => response.json())
    .then((data )=> {

      console.log(typeof(data.aluno.nome))

      sessionStorage.setItem('nome', data.aluno.nome);

      console.log(typeof(sessionStorage.getItem('nome')))
    


      if (data.eh_aluno || data.eh_monitor) {
        location.replace("../pages/login-entrar.html")
      } else {
        document.querySelector("#mensagem").innerHTML = data.message;
      }
    })









}

