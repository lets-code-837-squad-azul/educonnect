const URL = 'https://educonnect-lets-code-837.herokuapp.com/api';

let editar = [];

function dados(){
    fetch(`${URL}/alunos/`).then(response => response.json()).then(data=>{
        console.log(data);

        let index = sessionStorage.getItem("aluno_id");
        console.log(index)

        editar={
            nome: data.alunos[index].nome,
            email: data.alunos[index].email,
            senha: data.alunos[index].senha,
            telefone: data.alunos[index].telefone,
            cpf: data.alunos[index].cpf,
            estado_id: data.alunos[index].estado_id,
            data_de_nascimento: data.alunos[index].data_de_nascimento,
            etnia: data.alunos[index].etnia,
            genero: data.alunos[index].genero,
            escolaridade: data.alunos[index].escolaridade

        }
        console.log(editar)

        const disponibilidade = document.getElementById("disponibilidade");
        
        disponibilidade.innerHTML = registroDeAulas.map(function(aula, index){
            return ` <div class="centralizado-linha">
            <label for="nome">Nome:</label>
            <input class="input-texto" id="nome" type="text" required autofocus>
            <input id="nome" type="text">
        </div>
        <div class="centralizado-linha">
            <label for="email"><p id="email1">E-mail:</p></label>
            <input value="${jkdsjakldjaskld}" class="input-texto" id="email" type="email" required>
        </div>
        <div class="centralizado-linha">
            <label for="senha">Senha:</label>
            <input class="input-texto" id="senha" type="password" required>
        </div>

        <div class="centralizado-linha">
            <label for="telefone">Telefone:</label>
            <input class="input-texto" id="telefone" type="tel"  required>
        </div>
        <div class="centralizado-linha">
            <label for="cpf">CPF:</label>
            <input class="input-texto" id="cpf" type="tel" pattern="[0-9]{11}" required>
        </div>
        <div class="centralizado-linha">
            <label for="estado">Estado:</label>
            <input class="input-texto" id="estado" type="text" required>
        </div>
        <div class="centralizado-linha">
            <label for="nascimento">Data de nascimento:</label>
            <input class="input-texto" id="data_de_nascimento" type="date" >
        </div>
        <div class="centralizado-linha">
            <label for="etnia">Etnia:</label>
            <select id="etnia" name="etnia">
                <option value="" disabled selected hidden>Selecione uma opção</option>
                <option value="Amarela">Amarela</option>
                <option value="Branca">Branca</option>
                <option value="Indígena">Indígena</option>
                <option value="Parda">Parda</option>
                <option value="Preta">Preta</option>
                <option value="Prefiro não responder">Prefiro não responder</option>
            </select>
        </div>
        <div class="centralizado-linha">
            <label for="genero">Gênero:</label>
            <select id="genero" name="genero">
                <option value="" disabled selected hidden>Selecione uma opção</option>
                <option value="Homem cis">Homem cis</option>
                <option value="Mulher cis">Mulher cis</option>
                <option value="Homem trans">Homem trans</option>
                <option value="Mulher trans">Mulher trans</option>
                <option value="Prefiro não responder">Prefiro não responder</option>
                <option value="Outro">Outro</option>
            </select>
        </div>
        <div class="centralizado-linha">
            <label for="escolaridade">Escolaridade:</label>
            <select id="escolaridade" name="escolaridade">
                <option value="" disabled selected hidden>Selecione uma opção</option>
                <option value="Ensino fundamental incompleto">Ensino fundamental incompleto</option>
                <option value="Ensino fundamental completo">Ensino fundamental completo</option>
                <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                <option value="Ensino médio completo">Ensino médio completo</option>
                <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                <option value="Ensino superior completo">Ensino superior completo</option>
                <option value="Pós-graduação (especialização, mestrado ou doutorado)">Pós-graduação (especialização, mestrado ou doutorado)</option>
            </select>
        </div>
        <br>
        <!-- <a href="../pages/tela-monitor-cadastro-materia.html"></a> -->
        <button onclick="cadastrarAluno()" class="bt-avançar">Salvar</button>
        <a href="../pages/login-cadastrar.html"><button type="button" class="bt-voltar">Voltar</button></a>
    </div>`
    }).join("");



    })
}
console.log("foi")
dados()




function mostrarAulas(){
    let registroDeAulas = [];
    fetch(`${URL}/aulas/`).then(response => response.json()).then(data=>{

        console.log(typeof(String(data.aulas[13].disciplina_id)))
        console.log(typeof(document.getElementById("materiaMonitoria").value))



        for(let i =0; i<data.aulas.length; i++){
            if(String(data.aulas[i].disciplina_id) === document.getElementById("materiaMonitoria").value){
                console.log("entrou no if", data.aulas[i].disciplina_id)
        aulas = {
            monitor: sessionStorage.getItem('nome'),
            dia_da_semana: data.aulas[i].dia_da_semana,
            horario_inicial: data.aulas[i].hora_inicio,
            horario_final: data.aulas[i].hora_fim
        }
        registroDeAulas.push(aulas)
    }
}

console.log("registro de aulas",registroDeAulas)
        

        const disponibilidade = document.getElementById("disponibilidade");

        disponibilidade.innerHTML = registroDeAulas.map(function(aula, index){
        return `<tr>
        <td class="input-materia">
            <input class="input-materia" name="selecao-monitor" type="radio" value="">
        </td>
        <td>
            <input value="${aula.monitor}" disabled></input>
        </td>
        <td>
        <input value="${aula.dia_da_semana}" disabled></input>
        </td>
        <td>
        <input value="${aula.horario_inicial}" disabled></input>
        
        </td>
        <td>
        <input value="${aula.horario_final}" disabled></input>
        </td>
    </tr>`
}).join("");

    
    
    }) 
}



function buscarAula(){
    console.log("teste")
}

function cadastrarAula() {

    var select = document.getElementById("materiaMonitoria");

    console.log('select', select.value)
    
    // console.log("Botão salvar aula");


    // const materiaAula = document.getElementById("materiaAula").value;
    

    // console.log("materiaAula:", materiaAula);    

}






function editarAluno() {


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



fetch(`${URL}/alunos/`,{method:"POST", body:JSON.stringify({
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

