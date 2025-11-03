function adicionar(){
    var num = document.getElementById('txtn')
    if (num.value.length == 0) {
        window.alert('Digite um numero!')
    } else if (num.value.length < 1 && num.value.length > 100) {
        window.alert('Digite um numero entre 1 e 100!')
    }
}
function finalizar(){

}