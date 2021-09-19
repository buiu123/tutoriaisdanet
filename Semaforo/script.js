const imagem = document.getElementById('img')
const buttons = document.getElementById('buttons')
let coresIndex = 0

const luzSemaforo = (evento) => {
    ligar[evento.target.id]()
}

const nextIndex = () => {

    if (coresIndex <2) {
        ++coresIndex
    } else {
        coresIndex = 0
    }
}

const mudarCores = () => {
    const cores = ['red', 'yellow', 'green']
    const color = cores[coresIndex]
    ligar[color]()
    nextIndex()
}
const ligar = {
    'red': () => imagem.src = './assets/vermelho.png',
    'yellow': () => imagem.src = './assets/amarelo.png',
    'green': () => imagem.src = './assets/verde.png',
    'automatic': () => setInterval(mudarCores, 1000)
    
}
buttons.addEventListener('click', luzSemaforo)