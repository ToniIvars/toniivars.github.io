const translation = {
  english: {
    "about-me-nav": "About me",
    "techs-title": "Technologies",
    "projects-title": "Projects",
    "about-me-title": "Hi! I am Toni Ivars",
    "about-me-desc":
      "I am a self-taught developer very keen on Python and web development. Keep scrolling to find out which technologies I know or some projects I have made!",
    "about-me-find": "Find me on",
    "projects-desc-react": "React project that can be used to save your thoughts",
    "projects-desc-django": "Web app made with Django that aims to be a Pokedex",
    "projects-desc-flask": "URL shortener web app made with Python and Flask",
    "projects-desc-localdrive": "Home cloud (sort of Google Drive) made with Python and Javascript",
    "projects-desc-automation": "Automate the messages sending through the web with Python and Selenium",
    "projects-other": "Check out my other Github projects"
  },
  spanish: {
    "about-me-nav": "Sobre mí",
    "techs-title": "Tecnologías",
    "projects-title": "Proyectos",
    "about-me-title": "Hola! Soy Toni Ivars",
    "about-me-desc":
      "Soy un desarrollador autodidacta muy interesado en Python y desarrollo web. ¡Descubre qué tecnologías conozco o algunos proyectos que he realizado!",
    "about-me-find": "Encuéntrame en",
    "projects-desc-react": "Proyecto de React que puedes usar para guardar lo que piensas.",
    "projects-desc-django": "Aplicación web hecha con Django que pretende ser una Pokédex",
    "projects-desc-flask": "Aplicación web para acortar URLs hecha con Python y Flask",
    "projects-desc-localdrive": "Nube doméstica (una especie de Google Drive) hecha con Python y Javascript",
    "projects-desc-automation": "Automatiza el envío de mensajes usando la web con Python y Selenium",
    "projects-other": "Mira mis otros proyectos en Github"
  }
}

const switches = document.querySelectorAll('#switch img')
const elementsToTranslate = document.querySelectorAll('*[data-translate]')

const translate = lang => elementsToTranslate.forEach(elem => elem.textContent = translation[lang][elem.dataset.translate])

switches.forEach(elem => elem.onclick = () => translate(elem.dataset.lang))