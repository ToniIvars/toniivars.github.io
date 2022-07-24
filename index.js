const NAV_LINKS = [...document.querySelectorAll('.nav-link')]
const SECTIONS_POSITIONS = [...document.querySelectorAll('.section')]

var navLinkClicked = false

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
    navLinkClicked = true
    
    NAV_LINKS.forEach(li => li.classList.toggle('selected', li === target))

    setTimeout(() => {
      navLinkClicked = false
    }, 1000)
  }
})