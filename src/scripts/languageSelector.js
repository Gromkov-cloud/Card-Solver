const allLangSelectors = document.querySelectorAll(".language-selector")

const langSelector = (id) => {
    const langSwitcher = document.getElementById(id)
    const langSwitchList = langSwitcher.querySelector(".language-selector__list")
    const langSwitchLangs = langSwitcher.querySelectorAll(".language-selector__language")
    const langSwitchCurrentLang = langSwitcher.querySelector(".language-selector__current-language")
    const langSwitchArrow = langSwitcher.querySelector(".language-selector__arrow")

    console.log(allLangSelectors)

    langSwitcher.addEventListener("click", (e) => {
        langSwitchList.classList.toggle("language-selector__list_active")
        langSwitchArrow.classList.toggle("language-selector__arrow_open")
        if (e.target.classList.contains("language-selector__language")) {


            langSwitchLangs.forEach(lang => {
                lang.classList.remove("language-selector__language_current")
            })
            e.target.classList.add("language-selector__language_current")
            langSwitchCurrentLang.textContent = e.target.textContent

            langSwitchList.classList.remove("language-selector__list_active")
            langSwitchArrow.classList.remove("language-selector__arrow_open")
        }
    })
}

langSelector("lang-selector-1")
langSelector("lang-selector-2")