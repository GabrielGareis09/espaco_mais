const btnDetalhes = document.getElementById("btnDetalhes")
const popUp = document.getElementById("dialog")
const fecharPopUp = document.getElementById("fecharPopUp")

btnDetalhes.onclick = function () {
    popUp.showModal()
}

fecharPopUp.onclick = function () {
    popUp.close()
}

const nomeUsuario = localStorage.getItem("usuarioNome")

const nomeBoasVindas = document.getElementById("nomeBoasVindas")
const nomePerfil = document.getElementById("nomePerfil")
const fotoPerfil = document.querySelector(".fotoPerfil")

if (nomeUsuario) {
    nomeBoasVindas.textContent = "Olá, " + nomeUsuario + " 👋"
    nomePerfil.textContent = nomeUsuario

    const partesNome = nomeUsuario.trim().split(" ")
    let iniciais = partesNome[0].charAt(0).toUpperCase()

    if (partesNome.length > 1) {
        iniciais += partesNome[partesNome.length - 1].charAt(0).toUpperCase()
    }

    fotoPerfil.textContent = iniciais
}