const burgerBtn = document.querySelector(".burger")
const bodyOverlay = document.querySelector(".body-overlay")
const menuMobile = document.querySelector(".menu-mobile")
const body = document.querySelector("body")

burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("burger_active")
    if (bodyOverlay.classList.contains("body-overlay_active")) {
        bodyOverlay.classList.remove("body-overlay_opacity")
        setTimeout(() => {
            bodyOverlay.classList.remove("body-overlay_active")
            body.classList.remove("body_hidden")
        }, 260)
    } else {
        bodyOverlay.classList.add("body-overlay_opacity", "body-overlay_active")
        body.classList.add("body_hidden")
    }
    menuMobile.classList.toggle("menu-mobile_active")
})
