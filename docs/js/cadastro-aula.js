const URL = 'https://educonnect-lets-code-837.herokuapp.com/api';
const contador=0

let aulas = []

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

