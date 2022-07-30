const NAV_TOGGLE = document.querySelector('#nav-toggle')
const NAVBAR = document.querySelector('#navbar')

const NAV_LINKS = [...document.querySelectorAll('.nav-link')]
const SECTIONS = [...document.querySelectorAll('.section')]

let sliderElem = document.getElementById('projects-slider')

let navLinkClicked = false

window.onscroll = () => {
  if (navLinkClicked) return

  let current = ""

  SECTIONS.forEach(section => {
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

NAV_TOGGLE.onclick = () => {
  NAVBAR.classList.toggle('hidden-nav')
}

const renderSlider = () => {
  let sliderContainer = document.querySelector('*[data-simple-slider]')
  
  if (!sliderContainer) {
    sliderElem.removeAttribute('style')
    Array.from(sliderElem.children).forEach(el => el.removeAttribute('style'))
    return
  }

  let slides = [...sliderContainer.children].slice(1)
  slides.reverse()
  slides.unshift(sliderContainer.firstElementChild)
  
  let slider = simpleslider.getSlider({
    container: sliderContainer,
    children: slides,
    paused: true,
  })
  
  let manager = new Hammer.Manager(sliderElem)
  let swipe = new Hammer.Swipe({direction: Hammer.DIRECTION_HORIZONTAL})
  
  manager.add(swipe)
  
  let directionTo = 'right'
  
  const toRight = () => {
    if (directionTo === 'left') {
      slider.reverse()
      directionTo = 'right'
    }
    slider.next()
  }
  
  const toLeft = () => {
    if (directionTo === 'right') {
      slider.reverse()
      directionTo = 'left'
    }
    slider.next()
  }
  
  manager.on('swiperight', toRight)
  manager.on('swipeleft', toLeft)
  
  document.getElementById('prev-project').onclick = toRight
  document.getElementById('next-project').onclick = toLeft
}

const mobileMode = () => {
  NAVBAR.classList.toggle('hidden-nav', window.innerWidth <= 520)
  sliderElem.toggleAttribute('data-simple-slider', window.innerWidth >= window.innerHeight)
  renderSlider()
}

window.onresize = mobileMode
mobileMode()