const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')
function initScrollSmooth() {

function scrollToSection(event) {
  event.preventDefault()
  const href = event.currentTarget.getAttribute('href')
  const section = document.querySelector(href)
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })

  if (window.innerWidth <= 850) {
    const offsetTop = section.offsetTop - 80

    window.scrollTo({
     top: offsetTop,
     behavior: 'smooth',
  })
  }
}

linksInternos.forEach((link) => {
  link.addEventListener('click', scrollToSection)
})
}
initScrollSmooth()

function initAnimationView(){
const contents = document.querySelectorAll('.js-view')
const windowPart = window.innerHeight * 0.6

function animationView() {
  contents.forEach((content) => {
    const contentTop = content.getBoundingClientRect().top
    const inContentVisile = (contentTop - windowPart) < 0
    if(inContentVisile) {
      content.classList.add('ativo')
    }
  })
}

animationView()

window.addEventListener('scroll', animationView)
}
initAnimationView()

const menu = document.querySelector(".menu-icon"),
menuOptions = document.querySelector(".header-menu")

menu.addEventListener("click", ((e) => {
  menuOptions.classList.toggle("visivel")
  e.currentTarget.classList.toggle("ativo")
}))

linksInternos.forEach((link) => {
  link.addEventListener('click', (() => {
    menu.click()
  }))
})

const textoElemento = document.querySelector(".texto-dinamico"),
textos = [
    "Localizado em Itabaiana, Sergipe",
    "Código limpo e interfaces modernas",
    "Dev Front-end focado em eficiência",
]


let indexTexto = 0,
indexLetra = 0;

function escreverTexto() {
  const textoAtual = textos[indexTexto]

  if (indexLetra < textoAtual.length) {
    textoElemento.innerHTML += textoAtual[indexLetra]
    indexLetra++
    setTimeout(escreverTexto, 100)
  } else {
    setTimeout(apagarTexto, 2000)
  }
}

function apagarTexto() {
  const textoAtual = textos[indexTexto]
  if (indexLetra > 0) {
    textoElemento.innerHTML = textoAtual.slice(0, indexLetra - 1)
    indexLetra--
    setTimeout(apagarTexto, 80)
  } else {
    if (indexTexto < 2) indexTexto++
    else indexTexto = 0
    setTimeout(escreverTexto, 1000)
  }
}
setTimeout(escreverTexto, 1000)