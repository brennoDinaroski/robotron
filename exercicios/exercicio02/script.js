const botao = document.querySelector('#calcular')
const resultado = document.querySelector('.resultado')

botao.addEventListener('click', () => {
    resultado.innerHTML = 'Fui clicado'
})

const botao02 = document.querySelector('#calcular02')
const resultado02 = document.querySelector('.resultado')

botao02.addEventListener('click', () => {
    resultado02.innerHTML = 'texto alterado'
})



