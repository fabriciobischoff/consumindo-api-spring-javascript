function carregar() {
    fetch('http://localhost:8080/linguagens')
    .then(response => response.json())
    .then(linguagens => {
        const container = document.querySelector("#linguagens-container")

        linguagens.map(linguagem => {
            const card = document.createElement("div")
            card.classList.add("card")

            const img = document.createElement("img");
            img.src = linguagem.pathFoto
            img.alt = linguagem.titulo

            const titulo = document.createElement("h3")
            titulo.textContent = linguagem.titulo

            card.appendChild(img)
            card.appendChild(titulo)
            container.appendChild(card)
        })
    })
}

carregar()