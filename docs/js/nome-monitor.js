const teste = fetch(`${URL}/aulas/`).then(response => response.json()).then(data=>{console.log(data)});

console.log(teste)