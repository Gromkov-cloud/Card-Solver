const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        if (burgerBtn.classList.contains("burger_active")) {
            burgerBtn.classList.remove("burger_active")
            bodyOverlay.classList.remove("body-overlay_opacity")
            menuMobile.classList.remove("menu-mobile_active")
            setTimeout(() => {
                bodyOverlay.classList.remove("body-overlay_active")
                body.classList.remove("body_hidden")
            }, 260)
        }

        const blockID = anchor.getAttribute('href')

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}