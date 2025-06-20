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

const menu = document.querySelector(".menu-area"),
checkbox = document.getElementById("menu"),
menuOptions = document.querySelector(".header-menu")

menu.addEventListener("click", (() => {
  menuOptions.classList.toggle("visivel")
}))

linksInternos.forEach((link) => {
  link.addEventListener('click', (() => {
    checkbox.click()
  }))
})