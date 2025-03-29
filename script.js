function initScrollSmooth() {
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

function scrollToSection(event) {
  event.preventDefault()
  const href = event.currentTarget.getAttribute('href')
  const section = document.querySelector(href)
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
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