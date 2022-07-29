const url = 'https://educonnect-lets-code-837.herokuapp.com/api/'

function setAluno() {

    console.log("entrou");

    const nome = document.getElementById('nome').value

    const email = document.getElementById('email').value 

    const senha = document.getElementById('senha').value

    const telefone = document.getElementById('telefone').value

    const cpf = document.getElementById('cpf').value

    const nascimento = document.getElementById('nascimento').value

    const etnia = document.getElementsById('etnia').value

    const genero = document.getElementsById('genero').value

    const escolaridade = document.getElementsById('escolaridade').value

    const aluno = {
        nome: nome,
        email: email,
        senha: senha,
        telefone: telefone,
        cpf: cpf,
        nascimento: nascimento,
        etnia: etnia,
        genero: genero, 
        escolaridade: escolaridade
    }

    fetch(`${url}alunos`, {method:'POST', body:JSON.stringify(aluno)}).then(response => response.json())
    .then(data => {
        console.log(data)
    })

    return aluno
}