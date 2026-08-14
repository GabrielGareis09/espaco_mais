const buscaEspaco = document.querySelector(".filtrosEspacos input")

const filtroTipo = document.querySelector(
    ".filtrosEspacos select:nth-of-type(1)"
)

const filtroStatus = document.querySelector(
    ".filtrosEspacos select:nth-of-type(2)"
)

const tabela = document.querySelector(".tabelaEspacos tbody")

const contadorEspacos = document.querySelector(".titCardEspacos h2")

const nomeUsuario = localStorage.getItem("usuarioNome")
const nomePerfil = document.querySelector(".nomePerfil")
const fotoPerfil = document.querySelector(".fotoPerfil")

if (nomeUsuario) {
    nomePerfil.textContent = nomeUsuario

    const partesNome = nomeUsuario.trim().split(" ")
    let iniciais = partesNome[0].charAt(0).toUpperCase()

    if (partesNome.length > 1) {
        iniciais += partesNome[partesNome.length - 1]
            .charAt(0)
            .toUpperCase()
    }

    fotoPerfil.textContent = iniciais
}

function filtrarEspacos() {
    const textoBusca = buscaEspaco.value.toLowerCase().trim()
    const tipoSelecionado = filtroTipo.value
    const statusSelecionado = filtroStatus.value
    const linhas = Array.from(tabela.querySelectorAll("tr"))

    let quantidadeEncontrada = 0

    linhas.forEach(function (linha) {
        const nome = linha.querySelector(".nomeEspaco")
            .textContent
            .trim()
            .toLowerCase()

        const tipo = linha.querySelector(".tipoEspaco")
            .textContent
            .trim()

        const status = linha.querySelector(".statusEspaco")
            .textContent
            .trim()

        const correspondeBusca = nome.includes(textoBusca)

        const correspondeTipo =
            tipoSelecionado === "Todos os tipos" ||
            tipo === tipoSelecionado

        let correspondeStatus = true

        if (statusSelecionado === "Disponível") {
            correspondeStatus = status === "Disponível"
        }

        if (statusSelecionado === "Manutenção") {
            correspondeStatus = status === "Em manutenção"
        }

        const mostrar =
            correspondeBusca &&
            correspondeTipo &&
            correspondeStatus

        linha.style.display = mostrar ? "" : "none"

        if (mostrar) {
            quantidadeEncontrada++
        }
    })

    contadorEspacos.textContent =
        quantidadeEncontrada +
        (quantidadeEncontrada === 1
            ? " espaço encontrado"
            : " espaços encontrados")
}

buscaEspaco.addEventListener("input", filtrarEspacos)
filtroTipo.addEventListener("change", filtrarEspacos)
filtroStatus.addEventListener("change", filtrarEspacos)

const popUp = document.getElementById("dialog")
const fecharPopUp = document.getElementById("fecharPopUp")

const tipoDialog = document.getElementById("tipoDialog")
const espacoDialog = document.getElementById("espacoDialog")
const localizacaoDialog = document.getElementById("localizacaoDialog")
const capacidadeDialog = document.getElementById("capacidadeDialog")
const statusDialog = document.getElementById("statusDialog")

tabela.addEventListener("click", function (evento) {
    const botao = evento.target.closest(".btnDetalhes")

    if (!botao) {
        return
    }

    const linha = botao.closest("tr")

    const espaco = linha.querySelector(".nomeEspaco")
        .textContent
        .trim()

    const tipo = linha.querySelector(".tipoEspaco")
        .textContent
        .trim()

    const localizacao = linha.querySelector("td:nth-child(3)")
        .textContent
        .trim()

    const capacidade = linha.querySelector("td:nth-child(4)")
        .textContent
        .trim()

    const status = linha.querySelector(".statusEspaco")
        .textContent
        .trim()

    tipoDialog.textContent = tipo
    espacoDialog.textContent = espaco
    localizacaoDialog.textContent = "📍 " + localizacao
    capacidadeDialog.textContent = "👥 " + capacidade
    statusDialog.textContent = status

    statusDialog.classList.toggle(
        "manutencao",
        status === "Em manutenção"
    )

    popUp.showModal()
})

fecharPopUp.onclick = function () {
    popUp.close()
}

filtrarEspacos()