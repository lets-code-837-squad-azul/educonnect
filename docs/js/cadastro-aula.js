const URL = 'https://educonnect-lets-code-837.herokuapp.com/api';
const contador=0
let registroDeAulas = [];
let aulas = []

function registrarAula(){
    fetch(`${URL}/aulas/`).then(response => response.json()).then(data=>{


        console.log(data.aulas.length)
        for(let i =0; i<data.aulas.length; i++){
        aulas = {
            monitor: data.aulas[i].monitor_id,
            dia_da_semana: data.aulas[i].dia_da_semana,
            horario_inicial: data.aulas[i].hora_inicio,
            horario_final: data.aulas[i].hora_fim
        }
        registroDeAulas.push(aulas);
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
});

    
    
    }) 
}

registrarAula()

function cadastrarAula() {

    console.log(data.aulas)
    
    console.log("Botão salvar aula");

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

    
    
    console.log("buscaMateriaAula:", buscaMateriaAula);
    console.log("materiaAula:", materiaAula);    

}

