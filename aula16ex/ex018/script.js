var num = document.getElementById('txtn')
var sel = document.getElementById('txtsel')
var res = document.getElementById('res')
var vetor = []

function numero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
    return false
    }
}

function lista (n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    } 
}

function adicionar(){
    if(numero(num.value) && !lista(num.value, vetor)) {
        vetor.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        sel.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou ja encontrado na linsta.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(vetor.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        var total = vetor.length
        var maior = vetor[0]
        var menor = vetor[0]
        var soma = vetor[0]
        var media = vetor[0]
        for(var posiçao in vetor) {
            soma += vetor[posiçao]
            if (vetor[posiçao] > maior)
                maior = vetor[posiçao]
            if (vetor[posiçao] < menor)
                menor = vetor[posiçao]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}