const URL = 'https://educonnect-lets-code-837.herokuapp.com/api'

const aluno_id = sessionStorage.getItem('aluno_id')

// GET request using fetch()
fetch(`${URL}/aulas?aluno=${aluno_id}`)
	.then(response => response.json())
	.then(data => {
        const aulas = data.aulas;
        const cards = document.getElementById("aulasAgendadas");

        cards.innerHTML = aulas.map(function(aula, index){
            return `
                <div class="column">
                <div class="card">
                    <label>Aula:<input type="text" id="aula" name="aula" value="${aula.id}" disabled/></label>
                    <label>Disciplina:<input type="text" id="materia" name="materia" value="${aula.Disciplina.nome}" disabled/></label>
                    <label>Monitor:<input type="text" id="monitor" name="monitor" value="${aula.Monitor.nome}" disabled/></label>
                    <label><p id="data-inicio">Data de início:</p><input type="date" id="dataInicio" name="dataInicio" value="${aula.updatedAt.substring(0, 10)}" disabled/></label>
                    <p>Entre em contato com seu monitor:</p>
                    &ensp;
                    <a href=""><img src="https://img.icons8.com/material-outlined/35/000000/whatsapp--v1.png" alt="WhatsApp"></a>
                    &ensp;
                    <a href=""><img src="https://img.icons8.com/fluency-systems-regular/38/000000/ringer-volume.png" alt="Ligação"></a>
                    &ensp;
                    <a href=""><img src="https://img.icons8.com/material-outlined/35/000000/new-post.png" alt="Email"></a>
                    <br>
                    <button type="submit" onclick="deletarChat()" class="bt-deletar">Deletar</button>
                </div>
                </div>
            `
        }).join("");
    });
