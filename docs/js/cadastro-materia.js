const URL = 'https://educonnect-lets-code-837.herokuapp.com/api';

const materiaMonitoria = document.getElementById("materiaMonitoria");
const diasMonitoria = [];
const disponibilidade = `<tr>
<td>
    <select id="diaSemana" name="diaSemana" required>
        <option value="" disabled selected hidden>Escolha um dia</option>
        <option value="Domingo">Domingo</option>
        <option value="Segunda-feira">Segunda-feira</option>
        <option value="Terça-feira">Terça-feira</option>
        <option value="Quarta-feira">Quarta-feira</option>
        <option value="Quinta-feira">Quinta-feira</option>
        <option value="Sexta-feira">Sexta-feira</option>
        <option value="Sábado">Sábado</option>
    </select>
</td>
<td><input type="time" id="horaInicio" name="horaInicio" required></td>
<td><input type="time" id="horaFim" name="horaFim" required></td>
`;
document.querySelector("#nome").innerHTML = sessionStorage.getItem('nome');


function adicionarDiaHora() {
    let diaDaSemana = document.getElementById('diaSemana');
    let horaInicio = document.getElementById("horaInicio");
    let horaFinal = document.getElementById("horaFim");

    const horario = {
        diaDaSemana: diaDaSemana.value,
        horaInicio: horaInicio.value,
        horaFinal: horaFinal.value,
    }

    diasMonitoria.push(horario)

    const listaMonitoria = document.getElementById("listaMonitoria");

    listaMonitoria.innerHTML = diasMonitoria.map(function(horario, indice) {
       return `<tr>
       <td>${horario.diaDaSemana}</td>
        <td>${horario.horaInicio}</td>
        <td>${horario.horaFinal}</td>
        <td id='tabela_linha_'><abbr title="Remover"><input class="input-mais-menos" type='image' src="https://img.icons8.com/ios-glyphs/30/000000/filled-minus-2-math.png" alt="Remover mais um dia e horário"
        onClick=\"removerDiaHora('tabela_linha_')\"></input></abbr></td>
      </tr> `;
    }).join("") + disponibilidade


}

function removerDiaHora(id) {
    let deletar = document.getElementById("deletar");


    diasMonitoria.splice(deletar,1)


    listaMonitoria.innerHTML = diasMonitoria.map(function(horario, indice) {
        return `<tr>
        <td>${horario.diaDaSemana}</td>
         <td>${horario.horaInicio}</td>
         <td>${horario.horaFinal}</td>
         <td id='tabela_linha_'><abbr title="Remover"><input class="input-mais-menos" type='image' src="https://img.icons8.com/ios-glyphs/30/000000/filled-minus-2-math.png" alt="Remover mais um dia e horário"
         onClick=\"removerDiaHora('tabela_linha_')\"></input></abbr></td>
       </tr> `;
     }).join("") + disponibilidade

}

function cadastrarMateria() {

    console.log( `materiaMonitoria: ${materiaMonitoria.value}`);
    console.log("diasMonitoria ", diasMonitoria);


for(let i=0; i<diasMonitoria.length; i++){
    fetch(`${URL}/aulas`,{method:"POST", body:JSON.stringify({
        disciplina_id: 1,
        monitor_id: 1,
        status: "true",
        hora_inicio: diasMonitoria[i].horaInicio,
        hora_fim: diasMonitoria[i].horaFinal,
        dia_da_semana: diasMonitoria[i].value
    }),headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}).then(response => response.json()).then(data => console.log(data))
}

}
