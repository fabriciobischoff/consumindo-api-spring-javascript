fetch('http://localhost:8080/linguagens')
    .then(response => response.json())
    .then(r => console.log(r))
    .catch((error) => {console.log(error)})