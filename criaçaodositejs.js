function mostrarCampos() {
    const tipoReferencia = document.getElementById("tipoReferencia").value;
    const formReferencia = document.getElementById("formReferencia");

    formReferencia.innerHTML = "";

    if (tipoReferencia === "livro") {
        formReferencia.innerHTML += '<label for="titulo">Título:</label><input type="text" id="titulo" required>';
        formReferencia.innerHTML += '<label for="autor">Autor:</label><input type="text" id="autor" required>';
        formReferencia.innerHTML += '<label for="editora">Editora:</label><input type="text" id="editora">';
        formReferencia.innerHTML += '<label for="ano">Ano:</label><input type="number" id="ano">';
    }

    if (tipoReferencia === "site") {
        formReferencia.innerHTML += '<label for="nomeSite">Nome do Site:</label><input type="text" id="nomeSite" required>';
        formReferencia.innerHTML += '<label for="url">URL:</label><input type="url" id="url" required>';
        formReferencia.innerHTML += '<label for="dataAcesso">Data de Acesso:</label><input type="date" id="dataAcesso">';
    }

    if (tipoReferencia === "artigo") {
        formReferencia.innerHTML += '<label for="tituloArtigo">Título do Artigo:</label><input type="text" id="tituloArtigo" required>';
        formReferencia.innerHTML += '<label for="nomeRevista">Nome da Revista:</label><input type="text" id="nomeRevista" required>';
        formReferencia.innerHTML += '<label for="volume">Volume:</label><input type="text" id="volume">';
        formReferencia.innerHTML += '<label for="numero">Número:</label><input type="text" id="numero">';
    }

    if (tipoReferencia === "filme") {
        formReferencia.innerHTML += '<label for="tituloFilme">Título do Filme:</label><input type="text" id="tituloFilme" required>';
        formReferencia.innerHTML += '<label for="diretor">Diretor:</label><input type="text" id="diretor" required>';
        formReferencia.innerHTML += '<label for="anoFilme">Ano:</label><input type="number" id="anoFilme">';
        formReferencia.innerHTML += '<label for="formatoFilme">Formato:</label><input type="text" id="formatoFilme">';
    }

    if (tipoReferencia === "anuncio") {
        formReferencia.innerHTML += '<label for="tituloAnuncio">Título do Anúncio:</label><input type="text" id="tituloAnuncio" required>';
        formReferencia.innerHTML += '<label for="empresa">Empresa:</label><input type="text" id="empresa" required>';
        formReferencia.innerHTML += '<label for="anoAnuncio">Ano:</label><input type="number" id="anoAnuncio">';
        formReferencia.innerHTML += '<label for="formatoAnuncio">Formato:</label><input type="text" id="formatoAnuncio">';
    }
}

function gerarReferencia() {
    const tipoReferencia = document.getElementById("tipoReferencia").value;
    const formReferencia = document.getElementById("formReferencia");
    const referenciaGerada = document.getElementById("referenciaGerada");

    let referencia = `${tipoReferencia.toUpperCase()}: `;
    
    switch (tipoReferencia) {
        case "livro":
        case "filme":
            referencia += `Título: ${formReferencia.querySelector("#titulo").value}, `;
            referencia += `Autor ou Diretor: ${formReferencia.querySelector("#autor").value}, `;
            referencia += `Editora ou Empresa: ${formReferencia.querySelector("#editora").value}, `;
            referencia += `Ano: ${formReferencia.querySelector("#ano").value || "N/A"}`;
            break;
        case "site":
            referencia += `Nome do Site: ${formReferencia.querySelector("#nomeSite").value}, `;
            referencia += `URL: ${formReferencia.querySelector("#url").value}, `;
            referencia += `Data de Acesso: ${formReferencia.querySelector("#dataAcesso").value || "N/A"}`;
            break;
        case "artigo":
            referencia += `Título do Artigo: ${formReferencia.querySelector("#tituloArtigo").value}, `;
            referencia += `Nome da Revista: ${formReferencia.querySelector("#nomeRevista").value}, `;
            referencia += `Volume: ${formReferencia.querySelector("#volume").value || "N/A"}, `;
            referencia += `Número: ${formReferencia.querySelector("#numero").value || "N/A"}`;
            break;
        case "anuncio":
            referencia += `Título do Anúncio: ${formReferencia.querySelector("#tituloAnuncio").value}, `;
            referencia += `Empresa: ${formReferencia.querySelector("#empresa").value}, `;
            referencia += `Ano: ${formReferencia.querySelector("#anoAnuncio").value || "N/A"}, `;
            referencia += `Formato: ${formReferencia.querySelector("#formatoAnuncio").value || "N/A"}`;
            break;
    }

    referenciaGerada.textContent = `Referência Gerada: ${referencia}`;
}
function restaurarCampos() {
    const camposFormulario = document.querySelectorAll('#formReferencia input, #formReferencia select');
    camposFormulario.forEach(campo => {
        campo.value = '';
    });
}