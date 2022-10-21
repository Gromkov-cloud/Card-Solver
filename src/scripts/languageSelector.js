const langSwitcher = document.querySelector(".language-selector")
const langSwitchList = document.querySelector(".language-selector__list")
const langSwitchLangs = document.querySelectorAll(".language-selector__language")
const langSwitchCurrentLang = document.querySelector(".language-selector__current-language")
const langSwitchArrow = document.querySelector(".language-selector__arrow")

langSwitcher.addEventListener("click", (e) => {
    langSwitchList.classList.toggle("language-selector__list_active")
    langSwitchArrow.classList.toggle("language-selector__arrow_open")
    if (e.target.classList.contains("language-selector__language")) {
        langSwitchLangs.forEach(lang => {
            lang.classList.remove("language-selector__language_current")
        })
        e.target.classList.add("language-selector__language_current")
        langSwitchList.classList.remove("language-selector__list_active")
        langSwitchArrow.classList.remove("language-selector__arrow_open")
        langSwitchCurrentLang.textContent = e.target.textContent
        console.log(`Lang is switched to ${e.target.textContent}`)
    }
})