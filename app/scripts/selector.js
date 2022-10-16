const selector = document.querySelector(".selector-container")
const selectorDot = document.querySelector(".selector-dot")

selector.addEventListener("click", (e) => {
    selectorDot.classList.toggle("selector-dot_active")
})