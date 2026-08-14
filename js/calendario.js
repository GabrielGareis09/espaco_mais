const mesCalendario = document.getElementById("mesCalendario")
const anoCalendario = document.getElementById("anoCalendario")
const diasCalendario = document.getElementById("diasCalendario")
const mesAnterior = document.getElementById("mesAnterior")
const mesProximo = document.getElementById("mesProximo")
const filtroEspaco = document.querySelector(".filtrosCalendario select")

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
let dataCalendario = new Date()

const nomesMeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
]

function formatarData(data) {
    const partes = data.split("-")

    return {
        ano: Number(partes[0]),
        mes: Number(partes[1]) - 1,
        dia: Number(partes[2])
    }
}

function renderizarCalendario() {
    diasCalendario.innerHTML = ""

    const ano = dataCalendario.getFullYear()
    const mes = dataCalendario.getMonth()

    mesCalendario.textContent = nomesMeses[mes]
    anoCalendario.textContent = ano

    const primeiroDia = new Date(ano, mes, 1).getDay()
    const quantidadeDias = new Date(ano, mes + 1, 0).getDate()

    for (let i = 0; i < primeiroDia; i++) {
        const vazio = document.createElement("div")

        vazio.classList.add("diaCalendario", "vazio")
        diasCalendario.appendChild(vazio)
    }

    for (let dia = 1; dia <= quantidadeDias; dia++) {
        const elementoDia = document.createElement("div")
        elementoDia.classList.add("diaCalendario")

        const numeroDia = document.createElement("span")
        numeroDia.classList.add("numeroDia")
        numeroDia.textContent = dia

        elementoDia.appendChild(numeroDia)

        const hoje = new Date()

        if (
            dia === hoje.getDate() &&
            mes === hoje.getMonth() &&
            ano === hoje.getFullYear()
        ) {
            elementoDia.classList.add("hoje")
        }

        const reservasDoDia = reservas.filter(function (reserva) {
            const dataReserva = formatarData(reserva.data)
            const mesmaData =
                dataReserva.ano === ano &&
                dataReserva.mes === mes &&
                dataReserva.dia === dia

            let correspondeEspaco = true
            const filtro = filtroEspaco.value

            if (filtro !== "Todos os Espaços") {
                correspondeEspaco = verificarTipoEspaco(
                    reserva.espaco,
                    filtro
                )
            }

            return mesmaData && correspondeEspaco
        })

        reservasDoDia.forEach(function (reserva) {
            const reservaElemento = document.createElement("div")
            reservaElemento.classList.add("reservaCalendario")

            const horario = document.createElement("span")
            horario.textContent = reserva.horario

            reservaElemento.appendChild(horario)
            reservaElemento.appendChild(
                document.createTextNode(reserva.espaco)
            )

            elementoDia.appendChild(reservaElemento)
        })

        diasCalendario.appendChild(elementoDia)
    }

    const totalElementos = diasCalendario.children.length
    const diasRestantes = (7 - (totalElementos % 7)) % 7

    for (let i = 0; i < diasRestantes; i++) {
        const vazio = document.createElement("div")

        vazio.classList.add("diaCalendario", "vazio")
        diasCalendario.appendChild(vazio)
    }
}

function verificarTipoEspaco(nomeEspaco, tipo) {
    const nome = nomeEspaco.toLowerCase()

    if (tipo === "Informática") {
        return nome.includes("informática")
    }

    if (tipo === "Laboratório") {
        return nome.includes("laboratório")
    }

    if (tipo === "Auditório") {
        return nome.includes("auditório")
    }

    return true
}

mesAnterior.addEventListener("click", function () {
    dataCalendario.setMonth(dataCalendario.getMonth() - 1)
    renderizarCalendario()
})

mesProximo.addEventListener("click", function () {
    dataCalendario.setMonth(dataCalendario.getMonth() + 1)
    renderizarCalendario()
})

filtroEspaco.addEventListener("change", function () {
    renderizarCalendario()
})

renderizarCalendario()