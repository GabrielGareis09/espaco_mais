const tabela = document.querySelector(".tabelaHistorico tbody")
const buscaEspaco = document.querySelector(".filtrosHistorico input")
const filtroStatus = document.querySelector(".filtrosHistorico select")

const dialog = document.getElementById("dialog")
const fecharPopUp = document.getElementById("fecharPopUp")

const dataDialog = document.getElementById("dataDialog")
const espacoDialog = document.getElementById("espacoDialog")
const blocoDialog = document.getElementById("blocoDialog")
const turmaDialog = document.getElementById("turmaDialog")
const finalidadeDialog = document.getElementById("finalidadeDialog")

const dialogCancelar = document.getElementById("dialogCancelar")
const voltarCancelar = document.getElementById("voltarCancelar")
const confirmarCancelar = document.getElementById("confirmarCancelar")
const reservaCancelar = document.getElementById("reservaCancelar")

let reservaSelecionada = null

const nomeUsuario = localStorage.getItem("usuarioNome")
const nomePerfil = document.querySelector(".nomePerfil")
const fotoPerfil = document.querySelector(".fotoPerfil")

if (nomeUsuario) {
    nomePerfil.textContent = nomeUsuario

    const partesNome = nomeUsuario.trim().split(" ")
    let iniciais = partesNome[0].charAt(0).toUpperCase()

    if (partesNome.length > 1) {
        iniciais += partesNome[partesNome.length - 1].charAt(0).toUpperCase()
    }

    fotoPerfil.textContent = iniciais
}

const chaveReservas = "reservas"
let reservas = JSON.parse(localStorage.getItem(chaveReservas)) || []

function salvarReservas() {
    localStorage.setItem(chaveReservas, JSON.stringify(reservas))
}

reservas.forEach(function (reserva) {
    reserva.bloco = "Bloco Cinza"
})

if (reservas.length === 0) {
    reservas = [
        {
            id: Date.now() + 1,
            espaco: "Informática 01",
            bloco: "Bloco Cinza",
            data: "2026-08-06",
            horario: "08:10 — 09:00",
            turma: "3º A",
            finalidade: "Modelagem Banco de Dados",
            status: "Confirmada"
        },
        {
            id: Date.now() + 2,
            espaco: "Auditório",
            bloco: "Bloco Cinza",
            data: "2026-08-05",
            horario: "07:20 — 08:10",
            turma: "2º D",
            finalidade: "Debate sobre IA",
            status: "Confirmada"
        },
        {
            id: Date.now() + 3,
            espaco: "Informática 02",
            bloco: "Bloco Cinza",
            data: "2026-08-04",
            horario: "11:40 — 12:30",
            turma: "2º C",
            finalidade: "Mapeamento CNN",
            status: "Confirmada"
        }
    ]
}

salvarReservas()

function formatarData(data) {
    if (!data) return "--/--/----"

    const partes = data.split("-")
    return partes[2] + "/" + partes[1] + "/" + partes[0]
}

function converterData(data) {
    const partes = data.split("-")

    return new Date(
        Number(partes[0]),
        Number(partes[1]) - 1,
        Number(partes[2])
    )
}

function reservaEhProxima(reserva) {
    const hoje = new Date()
    hoje.setHours(0, 0, 0, 0)

    return converterData(reserva.data) >= hoje
}

function renderizarReservas() {
    tabela.innerHTML = ""

    const textoBusca = buscaEspaco.value.toLowerCase().trim()
    const filtro = filtroStatus.value

    let reservasFiltradas = reservas.filter(function (reserva) {
        const correspondeBusca = reserva.espaco
            .toLowerCase()
            .includes(textoBusca)

        let correspondeFiltro = true

        if (filtro === "Próximas") {
            correspondeFiltro = reservaEhProxima(reserva)
        } else if (filtro === "Passadas") {
            correspondeFiltro = !reservaEhProxima(reserva)
        }

        return correspondeBusca && correspondeFiltro
    })

    reservasFiltradas.sort(function (a, b) {
        return converterData(a.data) - converterData(b.data)
    })

    reservasFiltradas.forEach(function (reserva) {
        if (!reserva.bloco) {
            reserva.bloco = "Bloco Cinza"
        }

        const linha = document.createElement("tr")

        linha.innerHTML = `
            <td>
                <div class="espacoHistorico">${reserva.espaco}</div>
                <div class="blocoHistorico">${reserva.bloco}</div>
            </td>
            <td>
                <div class="dataHistorico">${formatarData(reserva.data)}</div>
                <div class="horarioHistorico">${reserva.horario}</div>
            </td>
            <td>
                <span class="turmaHistorico">${reserva.turma}</span>
            </td>
            <td>${reserva.finalidade}</td>
            <td>
                <span class="statusHistorico">
                    <span class="bolinhaStatus"></span>
                    ${reserva.status}
                </span>
            </td>
            <td>
                <div class="acoesHistorico">
                    <button class="btnDetalhes">Detalhes</button>
                    <button class="botaoCancelar">Cancelar</button>
                </div>
            </td>
        `

        tabela.appendChild(linha)

        linha.querySelector(".btnDetalhes").onclick = function () {
            dataDialog.textContent =
                formatarData(reserva.data) + " • " + reserva.horario

            espacoDialog.textContent = reserva.espaco
            blocoDialog.textContent = "📍 Bloco Cinza"
            turmaDialog.textContent = "👥 " + reserva.turma
            finalidadeDialog.textContent = reserva.finalidade

            dialog.showModal()
        }

        linha.querySelector(".botaoCancelar").onclick = function () {
            reservaSelecionada = reserva

            reservaCancelar.textContent =
                "Deseja cancelar a reserva de " +
                reserva.espaco +
                " em " +
                formatarData(reserva.data) +
                "?"

            dialogCancelar.showModal()
        }
    })

    atualizarContador(reservasFiltradas)
    atualizarCards()
}

function atualizarContador(reservasFiltradas) {
    const contador = document.querySelector(".titCardHistorico h2")

    contador.textContent =
        reservasFiltradas.length +
        (reservasFiltradas.length === 1 ? " reserva" : " reservas")
}

function atualizarCards() {
    const proximas = reservas
        .filter(reservaEhProxima)
        .sort(function (a, b) {
            return converterData(a.data) - converterData(b.data)
        })

    const cardProxima = document.querySelector(".miniCard:nth-child(1) h2")
    const legendaProxima = document.querySelector(".miniCard:nth-child(1) h3")

    if (proximas.length > 0) {
        const proxima = proximas[0]

        cardProxima.textContent = formatarData(proxima.data)
        legendaProxima.textContent = proxima.horario
    } else {
        cardProxima.textContent = "Nenhuma"
        legendaProxima.textContent = "Não há reservas próximas"
    }

    const hoje = new Date()

    const reservasMes = reservas.filter(function (reserva) {
        const data = converterData(reserva.data)

        return (
            data.getMonth() === hoje.getMonth() &&
            data.getFullYear() === hoje.getFullYear()
        )
    })

    const cardMes = document.querySelector(".miniCard:nth-child(3) h2")
    const legendaMes = document.querySelector(".miniCard:nth-child(3) h3")

    cardMes.textContent = reservasMes.length

    legendaMes.textContent = hoje.toLocaleDateString("pt-BR", {
        month: "long",
        year: "numeric"
    })

    const contagemEspacos = {}

    reservas.forEach(function (reserva) {
        if (!contagemEspacos[reserva.espaco]) {
            contagemEspacos[reserva.espaco] = 0
        }

        contagemEspacos[reserva.espaco]++
    })

    let espacoMaisUtilizado = "Nenhum"
    let maiorQuantidade = 0

    for (const espaco in contagemEspacos) {
        if (contagemEspacos[espaco] > maiorQuantidade) {
            maiorQuantidade = contagemEspacos[espaco]
            espacoMaisUtilizado = espaco
        }
    }

    const cardEspaco = document.querySelector(".miniCard:nth-child(2) h2")
    const legendaEspaco = document.querySelector(".miniCard:nth-child(2) h3")

    cardEspaco.textContent = espacoMaisUtilizado

    legendaEspaco.textContent =
        maiorQuantidade +
        (maiorQuantidade === 1 ? " reserva" : " reservas")
}

fecharPopUp.onclick = function () {
    dialog.close()
}

voltarCancelar.onclick = function () {
    dialogCancelar.close()
}

confirmarCancelar.onclick = function () {
    if (!reservaSelecionada) return

    reservas = reservas.filter(function (reserva) {
        return reserva.id !== reservaSelecionada.id
    })

    salvarReservas()

    reservaSelecionada = null
    dialogCancelar.close()

    renderizarReservas()
}

buscaEspaco.addEventListener("input", renderizarReservas)
filtroStatus.addEventListener("change", renderizarReservas)

renderizarReservas()