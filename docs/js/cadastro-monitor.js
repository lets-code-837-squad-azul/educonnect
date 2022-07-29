

const URL = 'https://educonnect-lets-code-837.herokuapp.com/api';

function cadastrarAluno() {

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const telefone = document.getElementById('telefone').value;
  const cpf = document.getElementById('cpf').value;
  const estado_id = document.getElementById('estado').value;
  const data_de_nascimento = document.getElementById('data_de_nascimento').value;
  const etnia = document.getElementById('etnia').value;
  const genero = document.getElementById('genero').value;
  const escolaridade = document.getElementById('escolaridade').value;



fetch(`${URL}/monitores/`,{method:"POST", body:JSON.stringify({
    nome: nome,
    email: email,
    senha: senha,
    telefone: telefone,
    cpf: cpf,
    estado_id: estado_id,
    data_de_nascimento: data_de_nascimento,
    etnia: etnia,
    genero: genero,
    escolaridade: escolaridade
  }),headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
})
.then(response => response.json())
.then(data => console.log(data))
}
