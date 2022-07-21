const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach(link => link.onclick = () => selectLink(link))

const selectLink = link => {
  navLinks.forEach(navLink => {
    navLink.classList.toggle('selected', link === navLink)
  })
}