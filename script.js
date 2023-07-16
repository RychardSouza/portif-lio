function toggleMode() {
    let hmtl = document.documentElement
    hmtl.classList.toggle('light')

    let img = document.querySelector('#profile img')

    if (hmtl.classList.contains('light')) {
        img.setAttribute('src', './img/avatar-light.png')
    } else {
        img.setAttribute('src', './img/avatar.png')
    }
}