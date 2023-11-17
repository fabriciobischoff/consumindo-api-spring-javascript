const json = fetch('http://localhost:8080/linguagens')
    .then(resposta => resposta.json())

    json.then(dados => {
        console.log(dados)
    })