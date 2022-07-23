const diasMonitoria = [];



function adicionarDiaHora() {
    console.log("Botão mais");

    const materiaMonitoria = document.getElementById("materiaMonitoria").value;
    const OutraMateriaMonitoria = document.getElementById("OutraMateriaMonitoria").value;

    console.log("materiaMonitoria:", materiaMonitoria);
    console.log("OutraMateriaMonitoria:", OutraMateriaMonitoria);

    const id = diasMonitoria.length + 1;
    const diaSemana = document.getElementById("diaSemana");
    const horaInicio = document.getElementById("horaInicio");
    const horaFim = document.getElementById("horaFim");
    const listaMonitoria = document.getElementById("listaMonitoria");

    const diaMonitoria = {
        id: id, 
        materiaMonitoria: materiaMonitoria.value,
        diaSemana: diaSemana.value,
        horaInicio: horaInicio.value,
        horaFim: horaFim.value,
    };

    console.log(id, materiaMonitoria.value, diaSemana.value, horaInicio.value, horaFim.value);

    console.log("diaMonitoria:", diaMonitoria);

    diasMonitoria.push(diaMonitoria);

    console.log("diasMonitoria:", diasMonitoria);

    listaMonitoria.innerHTML = diasMonitoria.map(function(diaMonitoria) {
        return `<tr>
            <td>${diaMonitoria.diaSemana}</td>
            <td>${diaMonitoria.horaInicio}</td>
            <td>${diaMonitoria.horaFim}</td>
        </tr>`;
    }).join("");

    console.log("listaMonitoria:", listaMonitoria);

    diaSemana.value = '';
    horaInicio.value = '';
    horaFim.value = '';
}

function removerDiaHora() {
    console.log("Botão menos");

}

function cadastrarMateria() {
    console.log("Botão cadastrar");

}


