const url = 'https://educonnect-lets-code-837.herokuapp.com/api/'

function setMonitor() {

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

    const monitor = {
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

    fetch(`${url}monitores`, {method:'POST', body:JSON.stringify(monitor)}).then(response => response.json())
    .then(data => {
        console.log(data)
    })

    return monitor
}