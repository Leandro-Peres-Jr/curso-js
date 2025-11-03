var agora = new Date() //pega o horario do sistema atual.
var hora = agora.getHours() // realiza o get da opção desejada para dentro da variavel agora.
console.log(`Agora são exatamente ${hora} horas.`) //esse comando imprime o texto no terminal do console
if (hora <12) {
    console.log('Bom Dia!')
} else if (hora <= 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}