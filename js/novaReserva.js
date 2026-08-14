const cardsEspacos = document.querySelectorAll(".cardEspaco, .cardEspacoAtivado")
const resumoEspaco = document.getElementById("resumoEspaco")
let espacoSelecionado = document.querySelector(".cardEspacoAtivado")

cardsEspacos.forEach(function (card) {
    card.addEventListener("click", function () {
        if (card.classList.contains("cardEspacoManutenção")) {
            return
        }

        cardsEspacos.forEach(function (item) {
            item.classList.remove("cardEspacoAtivado")
            item.classList.add("cardEspaco")
        })

        card.classList.remove("cardEspaco")
        card.classList.add("cardEspacoAtivado")

        espacoSelecionado = card
        resumoEspaco.textContent = card.querySelector("h1").textContent
    })
})

const dataReserva = document.getElementById("dataReserva")
const resumoData = document.getElementById("resumoData")

const hoje = new Date()
const ano = hoje.getFullYear()
const mes = String(hoje.getMonth() + 1).padStart(2, "0")
const dia = String(hoje.getDate()).padStart(2, "0")
const dataHoje = `${ano}-${mes}-${dia}`

dataReserva.value = dataHoje
dataReserva.min = dataHoje

function formatarData(data) {
    if (!data) {
        return "--/--/----"
    }

    const partes = data.split("-")
    return `${partes[2]}/${partes[1]}/${partes[0]}`
}

resumoData.textContent = formatarData(dataHoje)

dataReserva.addEventListener("change", function () {
    resumoData.textContent = formatarData(dataReserva.value)
})

const horariosDisponiveis = document.querySelectorAll(".cardHorariosDisponiveis")
const resumoHorario = document.getElementById("resumoHorario")

horariosDisponiveis.forEach(function (horario) {
    horario.addEventListener("click", function () {
        horariosDisponiveis.forEach(function (item) {
            item.classList.remove("horarioSelecionado")
        })

        horario.classList.add("horarioSelecionado")
        resumoHorario.textContent = horario.querySelector("h1").textContent
    })
})

const turmaReserva = document.getElementById("turmaReserva")
const resumoTurma = document.getElementById("resumoTurma")

turmaReserva.addEventListener("change", function () {
    resumoTurma.textContent = turmaReserva.value
})

const finalidadeReserva = document.getElementById("finalidadeReserva")

finalidadeReserva.addEventListener("input", function () {})

const btnCancelar = document.querySelector(".btnCanclear")
const btnConfirmar = document.querySelector(".btnConfirmar")

btnCancelar.addEventListener("click", function () {
    window.location.href = "../html/dashboard.html"
})

const popupConfirmacao = document.getElementById("popupConfirmacao")
const fecharConfirmacao = document.getElementById("fecharConfirmacao")

btnConfirmar.addEventListener("click", function () {
    if (resumoHorario.textContent === "Não selecionado") {
        alert("Selecione um horário antes de confirmar a reserva.")
        return
    }

    const reserva = {
        espaco: resumoEspaco.textContent,
        bloco: "Bloco Cinza",
        data: dataReserva.value,
        dataFormatada: resumoData.textContent,
        horario: resumoHorario.textContent,
        turma: turmaReserva.value,
        finalidade: finalidadeReserva.value.trim(),
        usuario: localStorage.getItem("usuarioNome"),
        status: "Confirmada"
    }

    let reservas = JSON.parse(localStorage.getItem("reservas")) || []

    reservas.push(reserva)

    localStorage.setItem("reservas", JSON.stringify(reservas))

    popupConfirmacao.showModal()
})

fecharConfirmacao.addEventListener("click", function () {
    popupConfirmacao.close()
    window.location.href = "../html/minhasReservas.html"
})