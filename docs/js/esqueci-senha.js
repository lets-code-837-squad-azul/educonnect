const URL = 'https://educonnect-lets-code-837.herokuapp.com/api';

function enviar(){
    const email = document.getElementById('email').value;
    
    fetch(`${URL}/alunos/email/${email}`).then(response => response.json()).then(data=>{
        if(data.message=="Aluno não encontrado"){

        document.querySelector("#resposta").innerHTML = data.message

    } else {
        document.querySelector("#resposta").innerHTML = "A senha foi enviada com sucesso para seu e-mail!!"

    }});   
 }