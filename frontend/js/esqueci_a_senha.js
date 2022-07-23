 function enviar(){
    const email = document.getElementById('email').value;



    //Depois temos que conectar com o banco para saber a existencia do email, mas vou colocar logo os if
    if(!email){
        document.querySelector("#resposta").innerHTML = "Email não encontrado. Qualquer duvida entre em contato com a gente por: educonectajuda@gmail.com e retornaremos assim que possivel."

    } else {
        document.querySelector("#resposta").innerHTML = "A senha foi enviada com sucesso para seu e-mail!!"

    }
 }