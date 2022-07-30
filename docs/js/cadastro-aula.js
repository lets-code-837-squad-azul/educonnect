const URL = 'https://educonnect-lets-code-837.herokuapp.com/api';
const contador=0

let aulas = []
let registroDeAulas = [];
let posicao = 0

function mostrarAulas(){

    fetch(`${URL}/aulas/`).then(response => response.json()).then(data=>{

        const BD = data.aulas
        console.log(BD);

        console.log(typeof(String(data.aulas[13].disciplina_id)))
        console.log(typeof(document.getElementById("materiaMonitoria").value))

        for(let i =0; i<data.aulas.length; i++){
            if(String(data.aulas[i].disciplina_id) === document.getElementById("materiaMonitoria").value){
                console.log("entrou no if", data.aulas[i].disciplina_id)
        aulas = {
          id:data.aulas[i].id,
          monitor: data.aulas[i].Monitor.nome,
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
              <label>${index}</label>
              <input id='index'  class="input-materia" name="selecao" type="radio" value="${index}">
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
  console.log(document.getElementById('selecaoDisciolica').value);


    })
}

function agendarAula() {

  var radioButtons = document.getElementsByName("selecao");

  let aula_id = ''

  for (let radiobutton of radioButtons) {
    if (radiobutton.checked) {
      console.log(radiobutton.value);
      aula_id = radiobutton.value
    }
  }

  console.log(registroDeAulas[aula_id].id);

  fetch(`${URL}/aulas/${registroDeAulas[aula_id].id}`, {

    method: "PATCH",

    body: JSON.stringify({
        aluno_id: sessionStorage.getItem('aluno_id')
    }),

    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json));

  location.replace("../pages/tela-aluno-aulas.html")

}
