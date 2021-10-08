var botao = document.getElementById("calcular")
var operacaoSoma = document.querySelector("#somar")
var operacaoSubt = document.querySelector("#subtrair")
var operacaoMult = document.querySelector("#multiplicar")
var operacaoDivd = document.querySelector("#dividir")

operacaoSoma.onclick = function() {
    this.classList.add("escolhido")
    operacaoSubt.classList.remove("escolhido")
    operacaoMult.classList.remove("escolhido")
    operacaoDivd.classList.remove("escolhido")
}

operacaoSubt.onclick = function() {
    this.classList.add("escolhido")
    operacaoSoma.classList.remove("escolhido")
    operacaoMult.classList.remove("escolhido")
    operacaoDivd.classList.remove("escolhido")
}

operacaoMult.onclick = function() {
    this.classList.add("escolhido")
    operacaoSoma.classList.remove("escolhido")
    operacaoSubt.classList.remove("escolhido")
    operacaoDivd.classList.remove("escolhido")
}

operacaoDivd.onclick = function() {
    this.classList.add("escolhido")
    operacaoSoma.classList.remove("escolhido")
    operacaoSubt.classList.remove("escolhido")
    operacaoMult.classList.remove("escolhido")
}

botao.onclick = function() {
        var termo1 = parseFloat(document.getElementById("first-num").value)
        var termo2 = parseFloat(document.getElementById("second-num").value)
        var resultado = document.getElementById("result")

        if(document.getElementById("first-num").value === "" || 
        document.getElementById("second-num").value === "") {

            resultado.innerHTML = "Insira um número válido!"

        } else if(operacaoSoma.classList.contains("escolhido")) {

            var resultadoFinal = termo1 + termo2
            resultado.innerHTML = termo1.toLocaleString() + " + " + termo2.toLocaleString() + " = " + resultadoFinal.toLocaleString()
            operacaoSoma.classList.remove("escolhido")

        } else if(operacaoSubt.classList.contains("escolhido")) {

            var resultadoFinal = termo1 - termo2
            resultado.innerHTML = termo1.toLocaleString() + " - " + termo2.toLocaleString() + " = " + resultadoFinal.toLocaleString()
            operacaoSubt.classList.remove("escolhido")

        } else if(operacaoMult.classList.contains("escolhido")) {

            var resultadoFinal = termo1 * termo2
            resultado.innerHTML = termo1.toLocaleString() + " × " + termo2.toLocaleString() + " = " + resultadoFinal.toLocaleString()
            operacaoMult.classList.remove("escolhido")

        } else if(operacaoDivd.classList.contains("escolhido")) {
            
            var resultadoFinal = termo1 / termo2
            resultado.innerHTML = termo1.toLocaleString() + " ÷ " + termo2.toLocaleString() + " = " + resultadoFinal.toLocaleString()
            operacaoDivd.classList.remove("escolhido")
        }

        document.getElementById("first-num").value = ""
        document.getElementById("second-num").value = ""
}

