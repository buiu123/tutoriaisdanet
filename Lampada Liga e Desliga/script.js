const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lamp = document.getElementById('lamp')


// Função que impede a lampada quebrada de se reconstruir
function lampQuebrada() {
    return lamp.src.indexOf('quebrada') > -1
}

//Função que liga a lampada
function lampLigar() {
    if (!lampQuebrada()){
    lamp.src = './assets/ligada.jpg'
    }
}
ligar.addEventListener('click', lampLigar)

//função que desliga a lampada
function lampDesligar() {
    if (!lampQuebrada()){
    lamp.src = './assets/desligada.jpg'
    }
}
desligar.addEventListener('click', lampDesligar)

lamp.addEventListener('mouseover', lampLigar)
lamp.addEventListener('mouseleave', lampDesligar)


//função que quebra a lampada
function lampQuebrar() {
    lamp.src = './assets/quebrada.jpg'

}

lamp.addEventListener('dblclick', lampQuebrar)
