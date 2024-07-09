let amigos = [];

/*  Problemas para resolver mais tarde:
    Impedir que o mesmo nome seja adicionado usando letras maiusculas e minusculas.

    Ignorar espaços digitados.

    Ao resolver o promeiro problema, deixe o inicio de cada nome em maiusculo, nome e sobrenome.

    Somente palavras podem ser adicionadas ao campo adicionar.
*/
function adicionar() {
    let amigo = document.getElementById("nome-amigo");
    if (amigo.value == "") {
        alert("Informe o nome do amigo!");
        return;
    }

    if (amigos.includes(amigo.value)) {
        alert("Nome já adicionado");
        return;
    }

    let lista = document.getElementById("lista-amigos");
    amigos.push(amigo.value);
    if (lista.textContent == "") {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ", " + amigo.value;
    }
    amigo.value = "";

}

function sortear() {
    // Função sortear
    if (amigos.length < 4) {
        alert("Adicione pelo menos 4 amigos!");
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById("lista-sorteio");

    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + "-->" + amigos[0] + "<br>";
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + "-->" + amigos[i + 1] + "<br>";
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}