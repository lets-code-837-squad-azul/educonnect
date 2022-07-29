
let aluno = sessionStorage.getItem('aluno');
let monitor = sessionStorage.getItem('monitor');


    if (aluno == 'false') {
      document.getElementById("esconder_aluno").style.display = "none";
    }

    if (monitor == 'false') {
      document.getElementById("esconder_monitor").style.display = "none";
    }

    document.querySelector("#nome").innerHTML = sessionStorage.getItem('nome');