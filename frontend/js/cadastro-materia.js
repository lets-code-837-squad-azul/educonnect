// PEGAR CÓDIGO MAIS ATUALIZADO DO JOSUÉ

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

const diasMonitoria = [];
let conta=0;

function adicionarDiaHora() {

    // e.preventDefault();

    console.log("Botão mais");

    conta++;

    let parte1 = `<tr>
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
            </td>`;
    let parte2 = `<td><input type="time" id="horaInicio" name="horaInicio" required></td>`
    let parte3 = `<td><input type="time" id="horaFim" name="horaFim" required></td>`
    let parte4 = `<td id='tabela_linha_` + conta + `'><abbr title="Remover"><input class="input-mais-menos" type='image' src="https://img.icons8.com/ios-glyphs/30/000000/filled-minus-2-math.png" alt="Remover mais um dia e horário"`;
    let parte5 = `onClick=\"removerDiaHora('tabela_linha_` + conta + `')\"></input></abbr>`;
    // let parte4 = `<td id='tabela_linha_` + conta + `'><input type='button'`;
    // let parte5 = `value='Remover' onClick=\"removerDiaHora('tabela_linha_` + conta + `')\"></input>`;

    document.getElementById("tabelaDiaMonitoria").innerHTML += parte1 + parte2 + parte3 + parte4 + parte5;
    document.getElementById("tabelaDiaMonitoria").innerHTML += "</td></tr>";

    const materiaMonitoria = document.getElementById("materiaMonitoria").value;
    const OutraMateriaMonitoria = document.getElementById("OutraMateriaMonitoria").value;

    console.log("materiaMonitoria:", materiaMonitoria);
    console.log("OutraMateriaMonitoria:", OutraMateriaMonitoria);

    let idMonitoria = diasMonitoria.length + 1;
    let diaSemana = document.getElementById("diaSemana");
    let horaInicio = document.getElementById("horaInicio");
    let horaFim = document.getElementById("horaFim");
    let listaMonitoria = document.getElementById("listaMonitoria");

}

function removerDiaHora(id) {
    console.log("Botão menos");

    teste = document.getElementById(id);
    teste.parentNode.parentNode.removeChild(teste.parentNode);

}

function cadastrarMateria() {
    console.log("Botão cadastrar");

}