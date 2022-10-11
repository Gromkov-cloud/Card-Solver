const langSwitcher = document.querySelector(".lang-switcher")
const langSwitchList = document.querySelector(".lang-switcher__list")
const langSwitchLangs = document.querySelectorAll(".lang-switcher__lang")
const langSwitchCurrentLang = document.querySelector(".lang-switcher__current-lang")
const langSwitchArrow = document.querySelector(".lang-switcher__arrow")

langSwitcher.addEventListener("click", (e) => {
    langSwitchList.classList.toggle("lang-switcher__list_active")
    langSwitchArrow.classList.toggle("lang-switcher__arrow_open")
    if (e.target.classList.contains("lang-switcher__lang")) {
        langSwitchLangs.forEach(lang => {
            lang.classList.remove("lang-switcher__lang_current")
        })
        e.target.classList.add("lang-switcher__lang_current")
        langSwitchList.classList.remove("lang-switcher__list_active")
        langSwitchArrow.classList.remove("lang-switcher__arrow_open")
        langSwitchCurrentLang.textContent = e.target.textContent
        console.log(`Lang is switched to ${e.target.textContent}`)
    }
})