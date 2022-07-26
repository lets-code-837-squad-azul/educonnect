// const diasMonitoria = [];


// function adicionarDiaHora() {
//     console.log("Botão mais");

//     const materiaMonitoria = document.getElementById("materiaMonitoria").value;
//     const OutraMateriaMonitoria = document.getElementById("OutraMateriaMonitoria").value;

//     console.log("materiaMonitoria:", materiaMonitoria);
//     console.log("OutraMateriaMonitoria:", OutraMateriaMonitoria);

//     const id = diasMonitoria.length + 1;
//     const diaSemana = document.getElementById("diaSemana");
//     const horaInicio = document.getElementById("horaInicio");
//     const horaFim = document.getElementById("horaFim");
//     const listaMonitoria = document.getElementById("listaMonitoria");

//     const diaMonitoria = {
//         id: id, 
//         materiaMonitoria: materiaMonitoria.value,
//         diaSemana: diaSemana.value,
//         horaInicio: horaInicio.value,
//         horaFim: horaFim.value,
//     };

//     console.log(id, materiaMonitoria.value, diaSemana.value, horaInicio.value, horaFim.value);

//     console.log("diaMonitoria:", diaMonitoria);

//     diasMonitoria.push(diaMonitoria);

//     console.log("diasMonitoria:", diasMonitoria);

//     listaMonitoria.innerHTML = diasMonitoria.map(function(diaMonitoria) {
//         return `<tr>
//             <td>${diaMonitoria.diaSemana}</td>
//             <td>${diaMonitoria.horaInicio}</td>
//             <td>${diaMonitoria.horaFim}</td>
//         </tr>`;
//     }).join("");

//     console.log("listaMonitoria:", listaMonitoria);

//     diaSemana.value = '';
//     horaInicio.value = '';
//     horaFim.value = '';
// }

// document.getElementById("inserir").addEventListener("adicionarDiaHora", function(event){
//     event.preventDefault()
//   });

// document.getElementById("inserir").addEventListener("submit", function(event) { event.preventDefault() });


let conta=0;
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
<td id='tabela_linha_'><abbr title="Remover"><input class="input-mais-menos" type='image' src="https://img.icons8.com/ios-glyphs/30/000000/filled-minus-2-math.png" alt="Remover mais um dia e horário"
onClick=\"removerDiaHora('tabela_linha_')\"></input></abbr>`;







function adicionarDiaHora() {
    let diaDaSemana = document.getElementById('diaSemana');
    let horaInicio = document.getElementById("horaInicio");
    let horaFinal = document.getElementById("horaFim");

    const horario = {
        diaDaSemana: diaDaSemana.value,
        horaInicio: horaInicio.value,
        horaFinal: horaFinal.value
    }

    diasMonitoria.push(horario)

    const listaMonitoria = document.getElementById("listaMonitoria");

    listaMonitoria.innerHTML = diasMonitoria.map(function(horario) {
       return `<tr>
       <td>${horario.diaDaSemana}</td>
        <td>${horario.horaInicio}</td>
        <td>${horario.horaFinal}</td>
        <td id='tabela_linha_'><abbr title="Remover"><input class="input-mais-menos" type='image' src="https://img.icons8.com/ios-glyphs/30/000000/filled-minus-2-math.png" alt="Remover mais um dia e horário"
        onClick=\"removerDiaHora('tabela_linha_')\"></input></abbr></td>
      </tr> `;
    }).join("") + disponibilidade

    





  

    
    // let parte4 = `<td id='tabela_linha_` + `'><input type='button'`;
    // let parte5 = `value='Remover' onClick=\"removerDiaHora('tabela_linha_` + `')\"></input>`;



   

}

function removerDiaHora(id) {
    console.log("Botão menos");

    teste = document.getElementById(id);
    teste.parentNode.parentNode.removeChild(teste.parentNode);

}



function cadastrarMateria() {

    const materiaMonitoria = document.getElementById("materiaMonitoria").value;
    const OutraMateriaMonitoria = document.getElementById("OutraMateriaMonitoria").value;

    console.log("materiaMonitoria:", materiaMonitoria);
    console.log("OutraMateriaMonitoria:", OutraMateriaMonitoria);
    
}


