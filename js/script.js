const botao = document.getElementById("calcular")
const operador = document.querySelectorAll(".operador")

operador.forEach(btn => {
    btn.addEventListener("click", e => {
        e.target.classList.add("escolhido")

        const notChoosen = document.querySelectorAll(".operador:not(" + "." + e.target.classList[1] + ")")
        notChoosen.forEach(item => {
            item.classList.remove("escolhido")
        })
    })
})

function operacaoFinal(num1, num2) {
    let operacao

    if (operador[0].classList.contains("escolhido")) {
        operacao = num1 + " + " + num2 + " = " + (num1 + num2).toLocaleString()
    } else if (operador[1].classList.contains("escolhido")) {
        operacao = num1 + " - " + num2 + " = " + (num1 - num2).toLocaleString()
    } else if (operador[2].classList.contains("escolhido")) {
        operacao = num1 + " × " + num2 + " = " + (num1 * num2).toLocaleString()
    } else if (operador[3].classList.contains("escolhido")) {
        operacao = num1 + " ÷ " + num2 + " = " + (num1 / num2).toLocaleString()
    }

    return operacao
}

botao.addEventListener("click", () => {
    const termo1 = document.getElementById("first-num").value
    const termo2 = document.getElementById("second-num").value
    const number1 = parseFloat(termo1)
    const number2 = parseFloat(termo2)
    const resultado = document.getElementById("result")

    if(termo1 === "" || termo2 === "") {
        resultado.innerHTML = "Insira números válidos!"
    } else {
        resultado.innerHTML = operacaoFinal(number1, number2)
    }

    document.getElementById("first-num").value = ""
    document.getElementById("second-num").value = ""
})