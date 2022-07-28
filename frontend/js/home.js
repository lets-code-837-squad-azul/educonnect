const ULR = "https://educonnect-lets-code-837.herokuapp.com/api";


function entrar(){
    const cpf = document.getElementById("CPF").value;
    const senha = document.getElementById("Senha").value;

    fetch(`${ULR}/login?cpf=${cpf}&senha=${senha}`)
    .then(response => response.json())
    .then((data, statusCode) => {
      console.log(data);
      if (data.eh_aluno || data.eh_monitor) {
        location.replace("./login-entrar.html")
      }
    })




}
