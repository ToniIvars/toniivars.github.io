const darkThemeIcon = document.querySelector('.theme-icon[data-theme="dark"]')
const lightThemeIcon = document.querySelector('.theme-icon[data-theme="light"]')

darkThemeIcon.onclick = () => {
    darkThemeIcon.style.animationPlayState = 'running'
    setTimeout(() => {
        darkThemeIcon.style.animationPlayState = 'paused'
        lightThemeIcon.classList.remove('hidden')
        darkThemeIcon.classList.add('hidden')
    }, 1450)

    document.querySelector('body').classList.add('light')
}

lightThemeIcon.onclick = () => {
    lightThemeIcon.style.animationPlayState = 'running'
    setTimeout(() => {
        lightThemeIcon.style.animationPlayState = 'paused'
        darkThemeIcon.classList.remove('hidden')
        lightThemeIcon.classList.add('hidden')
    }, 1450)

    document.querySelector('body').classList.remove('light')
}