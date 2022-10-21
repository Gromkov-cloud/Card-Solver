const switcher = document.querySelector(".switcher-container")
const switcherDot = document.querySelector(".switcher-dot")

switcher.addEventListener("click", (e) => {
    switcherDot.classList.toggle("switcher-dot_active")
})