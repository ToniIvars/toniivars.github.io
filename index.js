const NAV_TOGGLE = document.querySelector('#nav-toggle')
const NAVBAR = document.querySelector('#navbar')

const NAV_LINKS = [...document.querySelectorAll('.nav-link')]
const SECTIONS_POSITIONS = [...document.querySelectorAll('.section')]

let navLinkClicked = false

window.onscroll = () => {
  if (navLinkClicked) return

  let current = ""

  SECTIONS_POSITIONS.forEach(section => {
    const sectionTop = section.offsetTop
    if (scrollY >= sectionTop ) {
      current = section.getAttribute("id")
    }
  })

  NAV_LINKS.forEach(li => li.classList.toggle('selected', li.dataset.section === current))
}

NAV_LINKS.forEach(li => {
  li.onclick = ({target}) => {
    NAVBAR.classList.toggle('hidden-nav', window.innerWidth <= 520)
    navLinkClicked = true
    
    NAV_LINKS.forEach(li => li.classList.toggle('selected', li === target))

    setTimeout(() => {
      navLinkClicked = false
    }, 1000)
  }
})

window.onresize = () => NAVBAR.classList.toggle('hidden-nav', window.innerWidth <= 520)

NAV_TOGGLE.onclick = () => {
  NAVBAR.classList.toggle('hidden-nav')
}

NAVBAR.classList.toggle('hidden-nav', window.innerWidth <= 520)