const usuarios = [
    {
        username: "Gareis",
        password: "123",
        nome: "Gareis"
    },
    {
        username: "Luis",
        password: "123",
        nome: "Luis"
    },
    {
        username: "Caio",
        password: "123",
        nome: "Caio"
    }
]

const username = document.getElementById("username")
const password = document.getElementById("password")
const btnEntrar = document.getElementById("btnEntrar")
const mensagemLogin = document.getElementById("mensagemLogin")
const mostrarSenha = document.getElementById("mostrarSenha")

mostrarSenha.onclick = function () {
    const mostrar = password.type === "password"

    password.type = mostrar ? "text" : "password"
    mostrarSenha.textContent = mostrar ? "◡" : "👁"
}

btnEntrar.onclick = function () {
    const usuarioDigitado = username.value.trim()
    const senhaDigitada = password.value

    username.classList.remove("inputErro", "inputSucesso")
    password.classList.remove("inputErro", "inputSucesso")
    mensagemLogin.textContent = ""
    mensagemLogin.classList.remove("mensagemErro", "mensagemSucesso")

    if (usuarioDigitado === "") {
        mensagemLogin.textContent = "Digite seu username."
        mensagemLogin.classList.add("mensagemErro")
        username.classList.add("inputErro")
        username.focus()
        return
    }

    if (senhaDigitada === "") {
        mensagemLogin.textContent = "Digite sua senha."
        mensagemLogin.classList.add("mensagemErro")
        password.classList.add("inputErro")
        password.focus()
        return
    }

    const usuarioEncontrado = usuarios.find(function (usuario) {
        return usuario.username === usuarioDigitado &&
            usuario.password === senhaDigitada
    })

    if (usuarioEncontrado) {
        localStorage.setItem("usuarioNome", usuarioEncontrado.nome)

        mensagemLogin.textContent = "Login realizado com sucesso!"
        mensagemLogin.classList.add("mensagemSucesso")
        username.classList.add("inputSucesso")
        password.classList.add("inputSucesso")

        setTimeout(function () {
            window.location.href = "../html/dashboard.html"
        }, 500)

        return
    }

    mensagemLogin.textContent = "Username ou senha incorretos."
    mensagemLogin.classList.add("mensagemErro")
    username.classList.add("inputErro")
    password.classList.add("inputErro")
    password.focus()
}